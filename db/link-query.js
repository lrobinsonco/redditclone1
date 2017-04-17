const pg = require('./knex');

function getAll() {
  return pg('link').select().orderBy('votes', 'desc');
}

function add(obj){
  return pg('link').insert(obj);
}

function upVote(id) {
  return pg('link').where('id', '=', id).increment('votes', 1);
}

function downVote(id) {
  return pg('link').where('id', '=', id).decrement('votes', 1);
}

module.exports = {
  getAll,
  add,
  upVote,
  downVote,
};
