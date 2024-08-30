const express = require("express");
const router = express.Router();
const { getTeamGames } = require("../controllers/games-controller");

router.get("/:team_id", getTeamGames);

module.exports = router;
