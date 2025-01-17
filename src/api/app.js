const connection = require("../connection/connect.js");
const express = require("express");
const app = express();
const cors = require("cors");
const songsRouter = require("./routes/songs-router.js");
const routePath = "/api/v1";
const { errorHandler } = require("./errors/songs.errors.js");
app.use(express.json());

app.use(cors());

app.use(`${routePath}/songs`, songsRouter);

app.use(errorHandler);

module.exports = app;
