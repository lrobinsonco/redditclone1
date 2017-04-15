const express = require('express');
const linkQuery = require('./db/link-query');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  linkQuery.getAll()
  .then(data => {
  res.render('index', {data});
});
});

app.post('/add-link', (req, res) => {
  linkQuery.add(req.body)
  .then(() => {
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log('listening' + port);
});
