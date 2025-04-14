const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("🚚 Welcome to the Food Truck!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log(process.env);
console.log(process.env.DB_PASSWORD);
