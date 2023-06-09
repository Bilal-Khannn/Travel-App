const mongoose = require("mongoose");

const planSchema = mongoose.Schema({
  name: {
    String,
    required: [true, "Please enter a name for your trip"],
  },
  userEmail: {
    String,
    required: [true, "Enter your email to proceed with the trip"],
  },
  destination: {
    String,
    required: [true, "Please enter destination of the trip"],
  },
  notes: {
    String,
  },
});
