/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("team_games", (table) => {
    table.increments("id").primary();
    table.integer("team_id").unsigned().references("teams.id").onUpdate("CASCADE").onDelete("CASCADE").notNullable();
    table.integer("game_id").unsigned().references("games.id").onUpdate("CASCADE").onDelete("CASCADE").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("team_games");
};
