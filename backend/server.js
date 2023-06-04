const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}...`);
});
