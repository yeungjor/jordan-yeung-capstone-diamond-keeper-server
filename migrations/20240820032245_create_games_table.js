/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("games", (table) => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table
      .integer("home_team_id")
      .unsigned()
      .references("teams.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
    table
      .integer("away_team_id")
      .unsigned()
      .references("teams.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
    table.integer("home_team_runs").notNullable();
    table.integer("away_team_runs").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
