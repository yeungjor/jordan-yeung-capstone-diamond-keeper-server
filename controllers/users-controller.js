const knex = require("knex")(require("../knexfile"));

// Fetch user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await knex("users").where({ id }).first();
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// Create new user

const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    await knex("users").insert({
      name,
      email,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    });

    res.status(201)({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

module.exports = { getUserById, createUser };
