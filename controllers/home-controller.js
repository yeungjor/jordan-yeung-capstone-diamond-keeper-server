const knex = require("knex")(require("../knexfile"));

// Fetch all teams
const getTeams = async (req, res) => {
  try {
    const teams = await knex("teams").select("*");
    res.json({ teams });
  } catch (error) {
    res.status(500).json({ message: " Error fetching teams", error });
  }
};

module.exports = { getTeams };
