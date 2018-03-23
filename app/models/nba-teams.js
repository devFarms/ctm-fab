// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require('sequelize');
// sequelize (lowercase) references my connection to the DB.
var sequelize = require('../config/connection.js');

var NBATeams = sequelize.define('nba_teams_tbls', {
  nba_team_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },  
    nba_team_name: {
    type: Sequelize.STRING
  },
  my_sports_api_id: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
NBATeams.sync();

// Makes the User Model available for other files (will also create a table)
module.exports = NBATeams;