const mongoose = require("mongoose");
const db_name = "test_songs";
//db_name is databse name
mongo_uri = process.env.MONGO_URI || `mongodb://127.0.0.1:27017/${db_name}`;
console.log(mongo_uri);
const connection = mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
