const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  start: {
    type: String,
    required: false,
  },
  end: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('events', eventsSchema);
