// Dependencies
// =============================================================
// var User = require('../models/user.js');
var MySports = require('../models/my-sports.js');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all users
  // app.get('/api/users', function(req, res) {
  //   User.findAll({}).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // Get a specific user
  // app.get('/api/:user', function(req, res) {
  //   if (req.params.user) {
  //     User.findAll({
  //       where: {
  //         user_id: req.params.user
  //       }
  //     }).then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

  // Get data from sports table
  app.get('/api/my-sports', function(req, res) {
    MySports.findAll({}).then(function(results) {
      res.json(results);
    });
  });

};
