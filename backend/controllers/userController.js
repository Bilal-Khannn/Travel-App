const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

//import user model
const User = require("../model/userModel");

//import OTP model
const OTP = require("../model/otpModel");

//import transporter for nodemailer
const transporter = require("../utils/transporter");

// desc@ Create a new User
// route@ POST api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check payload data for any missing details
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Missing details! Fill all the fields");
  }

  //check if user already exists in DB
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //generate salt
  const salt = await bcrypt.genSalt(10);

  //hash the password
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create a user in DB
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.json({
      name: user.name,
      _id: user.id,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to register user");
  }
});

// Desc@ Login a registered user
// Route@ POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check payload data
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  //get user from DB
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Email not registered!");
  }

  //compare password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Either the email or the password is wrong");
  }
});

// Desc@ Reset password for registered users
// Route@ POST /api/users/reset
const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    res.status(400);
    throw new Error("Missing fields");
  }

  //check if otp matches with the otp stored in DB for the corresponding email
  const otpExist = await OTP.findOne({ email });

  if (!otpExist) {
    res.status(400);
    throw new Error("Incorrect OTP");
  }

  //Check if otp has expired
  if (new Date() > otpExist.expiresAt) {
    res.status(400);
    throw new Error("OTP Expired");
  }

  const storedOTP = String(otpExist.otp);

  if (storedOTP !== otp) {
    res.status(400);
    throw new Error("Incorrect OTP");
  }

  //hash new password before updating
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  //update the password
  const updatedUser = await User.findOneAndUpdate(
    { email },
    { password: hashedPassword }
  );

  //delete the used OTP from DB
  const deletedOTP = await OTP.findOneAndDelete({ email });

  if (updatedUser) {
    res.json({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser.id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to update password");
  }
});

// Desc@ Sends email with OTP for password reset
// Route@ POST /api/users/email
const sendEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Email missing!");
  }

  //check if the email is already registered in DB
  const userExists = await User.findOne({ email });

  if (!userExists) {
    res.status(400);
    throw new Error("Email is not registered");
  }

  //check if OTP exists in DB (There can be only one OTP stored at a time against one email)
  const otpExists = await OTP.findOne({ email });

  //remove existing OTP before generating a new one
  if (otpExists) {
    await OTP.deleteOne({ email });
  }

  //generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  //store otp in DB
  const newOTP = await OTP.create({
    email,
    otp,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 600000),
  });

  if (!newOTP) {
    res.status(400);
    throw new Error("Error in generating OTP");
  }

  //generate email content
  const emailContent = {
    from: "example@gmail.com",
    to: email,
    subject: "Password Reset OTP for your Travel Planner account",
    text: `Your OTP for password reset is: ${otp}`,
  };

  // Send the email
  transporter.sendMail(emailContent, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ message: "Failed to send OTP email" });
    } else {
      console.log("Email sent: ", info.response);
      res.json({ message: "OTP email sent" });
    }
  });
});

//generate token for the user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  resetPassword,
  sendEmail,
};
