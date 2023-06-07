const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Here are your plans");
});

module.exports = router;
