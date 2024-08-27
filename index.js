const express = require("express");
require("dotenv").config();

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

// basic home route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(
    `running at http://localhost:${PORT}`
  );
});
