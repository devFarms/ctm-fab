// Dependencies
// =============================================================
var User = require('../models/user.js');
var NBATeams = require("../models/nba-teams");
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
  app.post("/api/my-sports", function(req, res) {
    var mySport = {
      my_sports_api_id: req.body.teamId,
      my_sports_user_id: req.body.userId,
      my_sports_type: "NBA",
    }
    MySports.create(mySport)
    .then(function(resp) {
      console.log("done")
      res.json(resp);
    })
    .catch(function(err) {
      console.error(err);
    })
  })
  app.get('/api/teams', function(req, res){
    NBATeams.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // Get a specific users team
  app.get('/api/my-sports/:team', function(req, res) {
    console.log("WE ARE IN")
    // var seanArray = [];
    if (req.params.team) {
      MySports.findAll({
        where: {
          my_sports_user_id: req.params.team
        }
      }).then(function(results) {
        axios.get('https://api.sportradar.us/nba/trial/v4/en/games/2018/03/22/schedule.json?api_key=g25ry7vx8nyrw8rhag4ua3sn')
        .then(function(response){
          const resultsArr = response.data.games.filter(elem => {
           const temp = results.find(resultsElem => {
             return resultsElem.my_sports_api_id === elem.home.id || resultsElem.my_sports_api_id === elem.away.id
            });
            return temp != null;
          })
        res.json(resultsArr)
        })
        .catch( err => {
          console.log("ERROR")
          console.log(err)
          res.status(500).json(err.toString());
        })
      })
      .catch( err=> {
        res.status(500).json(err);
      })
    }
  });
};
