const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

//register a new user (Add protect here for auth)
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
