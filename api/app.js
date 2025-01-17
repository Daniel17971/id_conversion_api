const connection = require("../connection/connect.js");
const express = require("express");
const app = express();
const cors = require("cors");
const songsRouter = require("./routes/songs-router.js");
const routePath = "/api/v1";
app.use(express.json());

app.use(cors());

app.use(`${routePath}/songs`, songsRouter);

module.exports = app;
