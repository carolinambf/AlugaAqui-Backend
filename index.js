const moviesController = require('./controllers/moviesController');
const express = require('express');
const app = express();
const port = 3001;

app.get('/movies', moviesController.all)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})