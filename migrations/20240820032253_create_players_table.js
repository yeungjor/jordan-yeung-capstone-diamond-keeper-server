/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("players", (table) => {
    table.increments("id").primary();
    table
      .integer("team_id")
      .unsigned()
      .references("teams.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
    table.string("player_name").notNullable();
    table.integer("jersey_number").notNullable();
    table.string("gender").notNullable();
    table.string("bats").notNullable();
    table.string("throws").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("players");
};
