/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("teams").del();
  await knex("teams").insert([
    {
      id: 1,
      user_id: 1,
      team_name: "Blue Jays",
    },
    {
      id: 2,
      user_id: 2,
      team_name: "Cubs",
    },
    {
      id: 3,
      user_id: 3,
      team_name: "Orioles",
    },
    {
      id: 4,
      user_id: 4,
      team_name: "Yankees",
    },
  ]);
};
