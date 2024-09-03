const express = require("express");
const router = express.Router();
const { getTeams } = require("../controllers/home-controller");

router.get("/teams", getTeams);

module.exports = router;
