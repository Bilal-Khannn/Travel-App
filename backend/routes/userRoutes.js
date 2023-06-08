const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  resetPassword,
  sendEmail,
} = require("../controllers/userController");

//register a new user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

//reset password
router.post("/reset", resetPassword);

//email for reset password
router.post("/email", sendEmail);

module.exports = router;
