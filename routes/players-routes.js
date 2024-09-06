const express = require("express");
const router = express.Router();
const {
  getAllPlayers,
  getTeamPlayers,
  createPlayer,
  deletePlayer,
} = require("../controllers/players-controller");

router.get("/", getAllPlayers);

router.get("/:team_id", getTeamPlayers);

router.post("/", createPlayer);

router.delete("/:id", deletePlayer);

module.exports = router;
