const express = require("express");
const router = express.Router();
const {
  getTeamPlayers,
  createPlayer,
} = require("../controllers/players-controller");

router.get("/:team_id", getTeamPlayers);

router.post("/", createPlayer);

module.exports = router;
