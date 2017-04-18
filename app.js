const express = require('express');
const linkQuery = require('./db/link-query');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(express.static('public'));
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

app.post('/upvote/:id', (req, res) => {
  linkQuery.upVote(req.params.id)
  .then(()=> {
    res.redirect('/');
  });
});

app.post('/downvote/:id', (req, res) => {
  linkQuery.downVote(req.params.id)
  .then(()=> {
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log('listening' + port);
});
