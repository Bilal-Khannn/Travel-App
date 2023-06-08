const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const { getPlan } = require("../controllers/planController");

router.get("/", protect, getPlan);

module.exports = router;
