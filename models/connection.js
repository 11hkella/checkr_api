const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/checkr_api";

mongoose.connect(connectionString, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  }).catch(err => {
    console.error(err);
  });

module.exports = mongoose
