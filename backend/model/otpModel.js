const mongoose = require("mongoose");

const otpSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  otp: {
    type: Number,
    required: [true, "Please enter OTP"],
  },
  createdAt: {
    type: Date,
    required: [true, "Enter time of creation for the OTP"],
  },
  expiresAt: {
    type: Date,
    required: [true, "Enter time of expiration for the OTP"],
  },
});

module.exports = mongoose.model("OTP", otpSchema);
