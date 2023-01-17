const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

process.env.TZ = "Asia/Calcutta";
app.use(bodyParser.json());

const port = 3456;

mongoose
  .connect("mongodb://127.0.0.1:27017/project")
  .then(() => {
    console.log("Database connection secured!");
  })
  .catch((err) => {
    console.log("Error connecting to DB- " + err);
  });

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
