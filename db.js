const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/alugaaqui', {               //ligação á nossa base de dados, mongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

module.exports = mongoose;
