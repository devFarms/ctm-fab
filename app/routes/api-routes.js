// Dependencies
// =============================================================
var User = require('../models/user.js');
var MySports = require('../models/my-sports.js');
var axios = require('axios');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all users
  app.get('/api/users', function(req, res) {
    User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific users team
  app.get('/api/my-sports/:team', function(req, res) {
    var seanArray = [];
    if (req.params.team) {
      MySports.findAll({
        where: {
          my_sports_user_id: req.params.team
        }
      }).then(function(results) {
        axios.get('https://api.sportradar.us/nba/trial/v4/en/games/2018/03/17/schedule.json?api_key=g25ry7vx8nyrw8rhag4ua3sn')
        .then(function(response){
          for (var k = 0; k < response.data.games.length; k++){
            seanArray.push(
              {
                teamId: response.data.games[k].home.id,
                teamName: response.data.games[k].home.name,
                network: response.data.games[k].broadcast.network,
                satellite: response.data.games[k].broadcast.satellite
              });
          }
        seanArray.push(results);
        res.send(seanArray);
        });
      });
    }
  });

  // Get data from sports table
  // app.get('/api/my-sports', function(req, res){
  //   var seanArray = [];
  //   MySports.findAll({}).then(function(results) {
  //     axios.get('https://api.sportradar.us/nba/trial/v4/en/games/2018/03/17/schedule.json?api_key=g25ry7vx8nyrw8rhag4ua3sn')
  //     .then(function(response){
  //       for (var k = 0; k < response.data.games.length; k++){
  //         seanArray.push(
  //           {
  //             teamId: response.data.games[k].home.id,
  //             teamName: response.data.games[k].home.name,
  //             network: response.data.games[k].broadcast.network,
  //             satellite: response.data.games[k].broadcast.satellite
  //           });
  //       }
  //       seanArray.push(results);
  //       // console.log(seanArray);
  //       res.send(seanArray);
  //     });
  //   });
  // });

};
