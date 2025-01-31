const {
  getAllSongs,
  getSongById,
  getSongByName,
  deleteSongById,
  postSong,
  patchSongByName,
  patchSongBySpotifyId,
} = require("../controllers/songs.controller.js");

const songsRouter = require("express").Router();

songsRouter.route("/").get(getAllSongs).post(postSong);

songsRouter
  .route("/id/:_id")
  .get(getSongById)
  .delete(deleteSongById)
  .patch(patchSongBySpotifyId);

songsRouter.route("/name/:name").get(getSongByName).patch(patchSongByName);

module.exports = songsRouter;
