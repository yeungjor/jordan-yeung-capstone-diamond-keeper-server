const knex = require("knex")(require("../knexfile"));

// Get all players
const getAllPlayers = async (req, res) => {
  try {
    const players = await knex("players").select("*");
    res.json({ players });
  } catch (error) {
    res.status(500).json({ message: " Error fetching players", error });
  }
};

// Fetch players for specific team
const getTeamPlayers = async (req, res) => {
  const { team_id } = req.params;

  try {
    const players = await knex("players").where({ team_id }).select("*");
    res.json({ players });
  } catch (error) {
    res.status(500).json({ message: "Error fetching players", error });
  }
};

// Create new player
const createPlayer = async (req, res) => {
  const { player_name, jersey_number, gender, bats, throws, team_id } =
    req.body;

  try {
    await knex("players").insert({
      player_name,
      jersey_number,
      gender,
      bats,
      throws,
      team_id,
    });
    res.status(201).json({ message: "Player created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating player", error });
  }
};

module.exports = { getAllPlayers, getTeamPlayers, createPlayer };
