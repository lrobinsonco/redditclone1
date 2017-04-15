const pg = require('./knex');

function getAll() {
  return pg('link').select();
}

function add(obj){
  return pg('link').insert(obj);
}

module.exports = {
  getAll,
  add
};
