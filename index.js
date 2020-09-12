const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const rentController = require('./controllers/rentController');
const userController = require('./controllers/userController');
const prices = require("./prices");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/rent', rentController.all);
app.post('/rent', rentController.store);
app.get('/rent/:id', rentController.get);
app.get('/rent/:id/return', rentController.return);

app.get('/movie/:id/price', function(req, res) {
  res.json(prices[req.params.id] ? prices[req.params.id] : 5.99);
});

app.post('/user/register', userController.register);
app.post('/user/login', userController.login);
app.post('/user/logout', userController.logout);
app.get('/user', userController.get);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
