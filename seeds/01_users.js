/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      name: "John Schneider",
      email: "John.Schneider@gmail.com",
    },
    {
      id: 2,
      name: "Craig Counsell",
      email: "Craig.Counsell@gmail.com",
    },
    {
      id: 3,
      name: "Brandon Hyde",
      email: "Brandon.Hyde@gmail.com",
    },
    {
      id: 4,
      name: "Aaron Boone",
      email: "Aaron.Boone@gmail.com",
    },
  ]);
};
