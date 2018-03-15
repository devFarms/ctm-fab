// Dependencies
// =============================================================
var Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize('catch_the_match_db', 'root', 'root', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
