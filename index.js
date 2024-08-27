require("dotenv").config();

const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Faisal");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/chai", (req, res) => {
  res.send("Chai or Code");
});

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
