const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/vined')

const Vine = mongoose.model('Vine', {
  avatarUrl: String,
  created: String,
  description: String,
  likeCount: Number,
  thumbnailUrl: String,
  userId: String,
  username: String,
  videoUrl: String
})

module.exports = { Vine }
