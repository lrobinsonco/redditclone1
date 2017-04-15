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
  url: 'https://www.google.com',
  title: 'hello'
},
{
  id: 1,
  votes: 3,
  url: 'https://www.wunderground.com',
  title: 'hi'
}];
res.render('index', {data})
});

app.listen(port, () => {
  console.log('listening' + port);
});
