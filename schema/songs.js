const mongoose = require("mongoose");

const SongsSchema = new mongoose.Schema({
  name: String,
  youtube_id: String,
  spotify_id: String,
});

const SongsModel = mongoose.model("test_songs", SongsSchema);
// first argument is document name
module.exports = SongsModel;
