const SongsModel = require("../../schema/songs.js");

exports.fetchAllSongs = () => {
  return SongsModel.find({});
};

exports.insertSong = (reqBody) => {
  return SongsModel.create(reqBody);
};

exports.updateSong = (songName, reqBody) => {
  return SongsModel.findOneAndUpdate({ name: `${songName}` }, reqBody, {
    new: true,
  });
};

exports.fetchSongByName = (songName) => {
  return SongsModel.findOne({ name: `${songName}` });
};

exports.fetchSongById = (songId) => {
  return SongsModel.findOne({ _id: `${songId}` });
};

exports.removeSongById = (song_id) => {
  return SongsModel.deleteOne({ _id: `${song_id}` });
};
