const mongoose = require("mongoose");

const SongsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  youtube_id: { type: String },
  spotify_id: { type: String },
});

const SongsModel = mongoose.model("test_songs", SongsSchema);
// first argument is collection name
module.exports = SongsModel;
