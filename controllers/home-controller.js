const knex = require("../knexfile");

// Fetch teams
const getTeams = async (req, res) => {
  try {
    const teams = await knex("teams").select("*");
    res.json({ teams });
  } catch (error) {
    res.status(500).json({ message: " Error fetching teams", error });
  }
};

// Create new game
const createGame = async (req, res) => {
  const { homeTeam, awayTeam, runsFor, runsAgainst, date } = req.body;

  try {
    const gameId = await knew("games")
      .insert({
        date,
        home_team_id: homeTeam,
        away_team_id: awayTeam,
        runs_for: runsFor,
        runs_against: runsAgainst,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      })
      .returning("id");

    await knex("team_games").insert([
      { team_id: homeTeam, game_id: gameId[0] },
      { team_id: awayTeam, game_id: gameId[0] },
    ]);
    // Console log gameId
    console.log(gameId);

    res.status(201).json({ message: "Game created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating game", error });
  }
};

module.exports = { getTeams, createGame };
