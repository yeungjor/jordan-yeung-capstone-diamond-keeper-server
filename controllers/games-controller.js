const knex = require("knex")(require("../knexfile"));

// Get all games
const getAllGames = async (req, res) => {
  try {
    const games = await knex("games")
      .join("teams as home_team", "games.home_team_id", "home_team.id")
      .join("teams as away_team", "games.away_team_id", "away_team.id")
      .select(
        "games.id",
        "games.date",
        "home_team.team_name as home_team_name",
        "away_team.team_name as away_team_name",
        "games.home_team_runs",
        "games.away_team_runs",
        "games.home_team_id",
        "games.away_team_id"
      )
      .orderBy("games.date", "asc");
    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching games:", error);
    res
      .status(500)
      .json({ message: "Error fetching games", error: error.message });
  }
};

// Create new game
const createGame = async (req, res) => {
  const { date, home_team_id, away_team_id, home_team_runs, away_team_runs } =
    req.body;

  if (!away_team_id || !home_team_id || !date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const [gameId] = await knex("games").insert({
      date,
      home_team_id,
      away_team_id,
      home_team_runs,
      away_team_runs,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    });

    await knex("team_games").insert([
      { team_id: home_team_id, game_id: gameId },
      { team_id: away_team_id, game_id: gameId },
    ]);

    res.status(201).json({ message: "Game created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating game", error });
  }
};

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

module.exports = { getAllGames, createGame, getTeamGames };
