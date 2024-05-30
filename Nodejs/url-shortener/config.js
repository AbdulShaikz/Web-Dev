const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/url-shortener');
    console.log("MongoDB Connected!");
  } catch (err) {
    console.error("Error occurred while connecting!", err);
  }
}

module.exports = connectToDB;
