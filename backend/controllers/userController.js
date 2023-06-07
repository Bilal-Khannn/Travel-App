const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

//import user model
const User = require("../model/userModel");

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

//generate token for the user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
};
