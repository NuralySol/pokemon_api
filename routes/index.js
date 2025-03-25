const express = require('express');
const router = express.Router();

// mount individual API modules REST API calls:
router.use("/pokemon", require("../api/pokemon.js"));
router.use("/teams", require("../api/teams.js"));

module.exports = router;