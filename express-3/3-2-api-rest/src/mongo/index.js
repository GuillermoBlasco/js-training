const mongoose = require('mongoose');
//   here is the database -------------|
mongoose.connect('mongodb://localhost:27017/test-apirest', {useNewUrlParser: true});

// that is the collection ---|
const User = mongoose.model('User', { name: String }); // users
const Tweet = mongoose.model('Tweet', { name: String }); // users

module.exports = {
  User: User,
  Tweet: Tweet,
}
