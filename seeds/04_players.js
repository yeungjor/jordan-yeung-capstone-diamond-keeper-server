/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("players").del();
  await knex("players").insert([
    {
      id: 1,
      player_name: "Jordan Romano",
      jersey_number: 68,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 2,
      player_name:
        "Vladimir Guerrero Jr.",
      jersey_number: 27,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 3,
      player_name: "Ernie Clement",
      jersey_number: 28,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 4,
      player_name: "Alejandro Kirk",
      jersey_number: 30,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 5,
      player_name: "Davis Schneider",
      jersey_number: 36,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 6,
      player_name: "George Springer",
      jersey_number: 4,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 7,
      player_name: "Daulton Varsho",
      jersey_number: 25,
      gender: "male",
      bats: "left",
      throws: "right",
      team_id: 1,
    },
    {
      id: 8,
      player_name: "Addison Barger",
      jersey_number: 47,
      gender: "male",
      bats: "left",
      throws: "right",
      team_id: 1,
    },
    {
      id: 9,
      player_name: "Bo Bichette",
      jersey_number: 11,
      gender: "male",
      bats: "right",
      throws: "right",
      team_id: 1,
    },
    {
      id: 10,
      player_name: "Kevin Gausman",
      jersey_number: 34,
      gender: "male",
      bats: "left",
      throws: "right",
      team_id: 1,
    },
  ]);
};
