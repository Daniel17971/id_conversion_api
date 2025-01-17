const {
  fetchAllSongs,
  deleteSong,
  insertSong,
  updateSong,
  fetchSongByName,
  fetchSongById,
} = require("../models/songs.model.js");

exports.getAllSongs = async (req, res) => {
  try {
    const results = await fetchAllSongs();
    res.send(results).status(200);
  } catch (err) {
    console.log(err);
  }
};

exports.getSongByName = async (req, res) => {
  try {
    const result = await fetchSongByName(req.params.name);
    res.send(result).status(200);
  } catch (err) {}
};

exports.getSongById = async (req, res) => {
  try {
    const result = await fetchSongById(req.params.id);
    res.send(result).status(200);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteSongById = async (req, res) => {
  try {
    const result = await deleteSong(req.params.id);
    res.send(result).status(204);
  } catch (err) {
    console.log(err);
  }
};

exports.postSong = async (req, res) => {
  try {
    const payload = await insertSong(req.body);
    res.send(payload).status(201);
  } catch (err) {
    console.log(err);
  }
};

exports.patchSongByName = async (req, res) => {
  try {
    const updatedSong = await updateSong(req.params.name, req.body);
    res.send(updatedSong).status(200);
  } catch (err) {
    console.log(err);
  }
};
