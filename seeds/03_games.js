/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("games").del();
  await knex("games").insert([
    {
      id: 1,
      date: "2024-07-01",
      home_team_id: 1,
      away_team_id: 2,
      home_team_runs: 4,
      away_team_runs: 3,
    },
    {
      id: 2,
      date: "2024-07-01",
      home_team_id: 3,
      away_team_id: 4,
      home_team_runs: 7,
      away_team_runs: 1,
    },
    {
      id: 3,
      date: "2024-07-07",
      home_team_id: 1,
      away_team_id: 3,
      home_team_runs: 6,
      away_team_runs: 10,
    },
    {
      id: 4,
      date: "2024-07-07",
      home_team_id: 2,
      away_team_id: 4,
      home_team_runs: 11,
      away_team_runs: 10,
    },
    {
      id: 5,
      date: "2024-07-14",
      home_team_id: 1,
      away_team_id: 4,
      home_team_runs: 4,
      away_team_runs: 17,
    },
    {
      id: 6,
      date: "2024-07-14",
      home_team_id: 2,
      away_team_id: 3,
      home_team_runs: 6,
      away_team_runs: 10,
    },
  ]);
};
