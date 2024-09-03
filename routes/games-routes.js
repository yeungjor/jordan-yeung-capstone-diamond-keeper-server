const express = require("express");
const router = express.Router();
const {
  getAllGames,
  createGame,
  getTeamGames,
} = require("../controllers/games-controller");

router.get("/", getAllGames);

router.post("/", createGame);

router.get("/:team_id", getTeamGames);

module.exports = router;
