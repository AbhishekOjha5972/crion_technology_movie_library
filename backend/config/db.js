const mongoose = require("mongoose")
require('dotenv').config()

const movieLibraryDB = mongoose.connect(process.env.movieLibraryURL);

module.exports = {movieLibraryDB}