const mongoose = require('../db');

let User = mongoose.Schema({
  email: { type: String },
  name: { type: String },
  password: { type: String },
  nif: { type: String },
  token: { type: String, default: null },
});

module.exports = mongoose.model('User', User);
