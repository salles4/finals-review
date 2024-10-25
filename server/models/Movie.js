const mongoose = require('mongoose')

const MoviesSchema = new mongoose.Schema({
  name: String,
  poster: String,
  year: Number,
  rating: Number,
  cast: [],
  sypnosis: String
})

const MovieModel = mongoose.model("movies", MoviesSchema)

module.exports = MovieModel