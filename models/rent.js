const mongoose = require('../db');

let Rent = mongoose.Schema({
  movie_id: { type: String },
  user_id: { type: String },
  price: { type: Number },
  date_added: { type: Date, default: Date.now },
  date_returned: { type: Date, default: null },
});

module.exports = mongoose.model('Rent', Rent);
