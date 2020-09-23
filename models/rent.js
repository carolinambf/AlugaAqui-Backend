const mongoose = require('../db');
let Rent = mongoose.Schema({                                // base de dados do aluguer de filmes que faz ligação ao mongoDB 
  movie_id: { type: String },
  movie_name: { type: String },
  user_id: { type: String },
  price: { type: Number },
  date_added: { type: Date, default: Date.now },
  date_returned: { type: Date, default: null },
});

module.exports = mongoose.model('Rent', Rent);
