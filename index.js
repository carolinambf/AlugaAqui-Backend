const express = require('express');
const bodyParser = require('body-parser');

const rentController = require('./controllers/rentController');
const userController = require('./controllers/userController');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/rent', rentController.all);
app.post('/rent', rentController.store);
app.get('/rent/:id', rentController.get);
app.get('/rent/:id/return', rentController.return);

app.post('/user/register', userController.register);
app.post('/user/login', userController.login);
app.post('/user/logout', userController.logout);
app.get('/user', userController.get);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
