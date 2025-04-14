const express = require("express");
require("dotenv").config();

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

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log(process.env);
console.log(process.env.DB_PASSWORD);
