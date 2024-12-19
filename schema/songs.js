const mongoose = require("mongoose");

const SongsSchema = new mongoose.Schema({
  name: String,
  youtube_id: String,
  spotify_id: String,
});

const SongsModel = mongoose.model("songs", SongsSchema);

module.exports = SongsModel;
