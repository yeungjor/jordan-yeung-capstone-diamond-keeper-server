const express = require("express");
require("dotenv").config();
const cors = require("cors");
const homeRoutes = require("./routes/home-routes");
const gamesRoutes = require("./routes/games-routes");
const playersRoutes = require("./routes/players-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", homeRoutes);
app.use("/games", gamesRoutes);
app.use("/players", playersRoutes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
