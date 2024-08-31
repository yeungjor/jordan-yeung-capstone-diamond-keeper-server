/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("team_games").del();
  await knex("team_games").insert([
    { team_id: 1, game_id: 1 },
    { team_id: 2, game_id: 1 },
    { team_id: 3, game_id: 2 },
    { team_id: 4, game_id: 2 },
    { team_id: 1, game_id: 3 },
    { team_id: 3, game_id: 3 },
    { team_id: 2, game_id: 4 },
    { team_id: 4, game_id: 4 },
    { team_id: 1, game_id: 5 },
    { team_id: 4, game_id: 5 },
    { team_id: 2, game_id: 6 },
    { team_id: 3, game_id: 6 },
  ]);
};
