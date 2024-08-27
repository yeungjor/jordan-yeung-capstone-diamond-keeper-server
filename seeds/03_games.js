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
      runs_for: 4,
      runs_against: 3,
    },
    {
      id: 2,
      date: "2024-07-01",
      home_team_id: 3,
      away_team_id: 4,
      runs_for: 7,
      runs_against: 1,
    },
    {
      id: 3,
      date: "2024-07-07",
      home_team_id: 1,
      away_team_id: 3,
      runs_for: 6,
      runs_against: 10,
    },
    {
      id: 4,
      date: "2024-07-07",
      home_team_id: 2,
      away_team_id: 4,
      runs_for: 11,
      runs_against: 10,
    },
    {
      id: 5,
      date: "2024-07-14",
      home_team_id: 1,
      away_team_id: 4,
      runs_for: 4,
      runs_against: 17,
    },
    {
      id: 6,
      date: "2024-07-14",
      home_team_id: 2,
      away_team_id: 3,
      runs_for: 6,
      runs_against: 10,
    },
  ]);
};
