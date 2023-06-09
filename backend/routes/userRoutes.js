const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  resetPassword,
  sendEmail,
  getUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

//register a new user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

//reset password
router.post("/reset", resetPassword);

//email for reset password
router.post("/resetEmail", sendEmail);

//get user details
router.get("/getUser", protect, getUser);

module.exports = router;
