const MovieModel = require("../models/Movie");
const UserModel = require("../models/User");

const getMovies = (req, res) => {
  MovieModel.find()
    .then(movies => res.json(movies))
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: "Internal Server Error" })
    });
};
const getMovie = (req, res) => {
  UserModel.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const createMovie = (req, res) => {
  const newMovie = new MovieModel(req.body);
  newMovie.save()
    .then(movie => res.json(movie))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const updateUser = (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
}

const getUser = (req, res) => {
  UserModel.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
}
module.exports = { getMovies, createMovie, updateUser, getUser, getMovie }