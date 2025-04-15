const express = require("express");
require("dotenv").config();
const axios = require("axios");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("🚚 Welcome to the Food Truck!");
});

app.get("/hours", (req, res) => {
  res.send("🕒 We are open from 11am to 7pm!");
});

app.get("/contact", (req, res) => {
  res.send(
    "<p style='background-color: orange;'>📞 Contact us at 555-FOOD or hello@foodtruck.com</p>"
  );
});

app.get("/menu", (req, res) => {
  res.send(`<html><head><title>Menu</title></head><body>
            <h1>🥙 Our Menu</h1>
            <ul>
              <li>Tacos</li>
              <li>Quesadillas</li>
              <li>Smoothies</li>
            </ul>
          </body></html>`);
});

app.get("/api/user", async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=1");
    const user = response.data.results[0];

    const data = {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      location: `${user.location.city}, ${user.location.country}`,
      picture: user.picture.medium,
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log(process.env);
console.log(process.env.DB_PASSWORD);
