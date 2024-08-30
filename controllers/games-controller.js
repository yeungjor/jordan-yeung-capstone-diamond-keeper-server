const knex = require("../knexfile");

// Fetch team games for specific team
const getTeamGames = async (req, res) => {
  const { team_id } = req.params;

  try {
    const games = await knex("games")
      .join("team_games", "games_id", "team_games.game_id")
      .where("team_games.team_id", team_id)
      .select("games.*");

    req.json({ games });
  } catch (error) {
    res.status(500).json({ message: "Error fetching team games", error });
  }
};

module.exports = { getTeamGames };
