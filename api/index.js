const express = require("express");
const SongsModel = require("../schema/songs.js");
const app = express();
app.use(express.json());
const connection = require("../connection/connect.js");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/songs", async (req, res) => {
  try {
    const results = await SongsModel.find({});
    res.send(results).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.post("/songs", async (req, res) => {
  try {
    const payload = await SongsModel.create(req.body);
    res.send(payload).status(201);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/songs/:name", async (req, res) => {
  try {
    const updatedSong = await SongsModel.findOneAndUpdate(
      { name: `${req.params.name}` },
      req.body,
      { new: true }
    );
    res.send(updatedSong).status(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
