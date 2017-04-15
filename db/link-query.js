const pg = require('./knex');

function getAll() {
  return pg('link').select();
}

function add(obj){
  return pg('link').insert(obj);
}

function upvote(id) {
  
}

module.exports = {
  getAll,
  add
};
