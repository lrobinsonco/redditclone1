const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
//   linkQuery.getAll()
//   .then(data => {
//   res.render('index', {data});
// });
const data = [{
  id: 0,
  votes: 35,
  url: 'www.google.com',
  title: 'hello'
}];
});

app.listen(port, () => {
  console.log('listening' + port);
});
