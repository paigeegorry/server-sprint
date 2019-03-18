const mongoose = require('mongoose');

const randomSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Random', randomSchema);
