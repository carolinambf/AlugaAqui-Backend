const mongoose = require('../db');

let User = mongoose.Schema({                           // base de dados dos utilizadores que faz ligação ao mongoDB
  email: { type: String },
  name: { type: String },
  password: { type: String },
  nif: { type: String },
  token: { type: String, default: null },
});

module.exports = mongoose.model('User', User);
