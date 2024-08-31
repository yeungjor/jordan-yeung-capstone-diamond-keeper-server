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
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    const [userId] = await knex("users").insert({
      name,
      email,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    });

    res.status(201).json({ message: "User created successfully", userId });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

module.exports = { getUserById, createUser };
