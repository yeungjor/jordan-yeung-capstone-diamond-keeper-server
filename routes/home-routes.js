const express = require("express");
const router = express.Router();
const { getTeams, createGame } = require("../controllers/home-controller");

router.get("/", getTeams);

router.post("/games", createGame);

module.exports = router;
