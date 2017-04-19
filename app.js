const express = require('express');
const linkQuery = require('./db/link-query');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// bcrypt
// var bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// bcrypt saltRounds
// bcrypt.genSalt(saltRounds).then(salt =>{
//   console.log(salt);
//   bcrypt.hash(myPlaintextPassword, salt).then(hash => {
//     console.log(hash);
//   });
// });

// bcrypt.compare('not_bacon', kjfhdsjhf).then(isTrue => console.log(isTrue));

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

app.post('/add-comment/:id', (req, res) => {
req.body.link_id = req.params.id;
var comId = req.params.id;
linkQuery.addComment(req.body)
.then( data => {
  res.redirect('/comments/' + comId);
});
  });


app.get('/comments/:id', (req, res) => {
  console.log(req.params.id);
  linkQuery.getPage(req.params.id)
  .then(data => {
  res.render('comments', {data});
});
});



app.listen(port, () => {
  console.log('listening' + port);
});
