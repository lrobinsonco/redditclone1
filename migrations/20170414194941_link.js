
exports.up = function(knex, Promise) {
  return knex.schema.createTable('link', (table)=>{
  table.increments();
  table.integer('votes').defaultTo(1);
  table.string('url');
  table.string('title');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('link');

};
