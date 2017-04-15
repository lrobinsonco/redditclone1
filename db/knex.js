const config = require("../knexfile");

const environment = 'development';

const pg = require('knex')(config[environment]);

module.exports = pg;
