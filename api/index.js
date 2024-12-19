const express = require("express");
const SongsModel = require("../schema/songs.js");
const app = express();
const connection = require("../connection/connect.js");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/songs", (req, res) => {
  SongsModel.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = app;
