const SongsModel = require("../../schema/songs.js");

// Get Requests
exports.fetchAllSongs = () => {
  return SongsModel.find({});
};

exports.fetchSongByName = (songName) => {
  return SongsModel.findOne({ name: `${songName}` });
};

exports.fetchSongById = (songId) => {
  return SongsModel.findOne({ _id: `${songId}` });
};

exports.fetchSongBySpotifyId = (songId) => {
  return SongsModel.findOne({ spotify_id: `${songId}` });
};

// Post Requests
exports.insertSong = (reqBody) => {
  return SongsModel.create(reqBody);
};

// Patch Requests
exports.updateSong = (songName, reqBody) => {
  return SongsModel.findOneAndUpdate({ name: `${songName}` }, reqBody, {
    new: true,
  });
};

exports.updateSongBySpotifyId = (songId, reqBody) => {
  return SongsModel.findOneAndUpdate({ spotify_id: `${songId}` }, reqBody, {
    new: true,
  });
};

// Delete Requests
exports.removeSongById = (song_id) => {
  return SongsModel.deleteOne({ _id: `${song_id}` });
};
