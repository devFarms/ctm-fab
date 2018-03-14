// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var User = sequelize.define("user", {
  user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },  
    user_last_name: {
    type: Sequelize.STRING
  },
  user_first_name: {
    type: Sequelize.STRING
  },
  user_email: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
User.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = User;
