const knex = require("knex")(require("../knexfile"));

// Fetch team games for specific team
const getTeamGames = async (req, res) => {
  const { team_id } = req.params;

  try {
    const teamGames = await knex("games")
      .join("team_games", "games.id", "team_games.game_id")
      .where("team_games.team_id", team_id)
      .select("games.*");

    res.status(200).json({ teamGames });
  } catch (error) {
    console.error("Error Fetching team games:", error);
    res
      .status(500)
      .json({ message: "Error fetching team games", error: error.message });
  }
};

module.exports = { getTeamGames };
