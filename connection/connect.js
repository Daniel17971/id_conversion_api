const mongoose = require("mongoose");
const db_name = "test_songs";
//db_name is databse name
const connection = mongoose
  .connect(`mongodb://localhost:27017/${db_name}`)
  .then(() => {
    console.log("connected to db");
  });

module.exports = connection;
