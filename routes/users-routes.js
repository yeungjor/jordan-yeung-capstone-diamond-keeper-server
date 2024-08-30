const express = require("express");
const router = express.Router();
const { getUserById, createUser } = require("../controllers/users-controller");

router.get("/:id", getUserById);

router.post("/", createUser);

module.exports = router;
