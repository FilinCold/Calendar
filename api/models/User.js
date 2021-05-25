const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    default: 'About me',
    required: false,
  },
  img: {
    type: String,
    default: '',
    required: false,
  }
});

module.exports = mongoose.model('users', userSchema);
