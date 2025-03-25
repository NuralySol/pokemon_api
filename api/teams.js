// team routes:
const express = require('express');
const router = express.Router();

//! API routes REST:
router.get("/", (req, res) => {
    res.json({ message: "GET all teams" });
});

module.exports = router; 