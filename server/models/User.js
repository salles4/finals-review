const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  movies:[],
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel