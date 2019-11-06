var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // create a new user 
  app.post("/api/user/signup", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    db.User.create({
      username,
      password
    }).then(function(data) {
      res.json(data.username);
    }).catch(function(err) {
      console.log(err);
      res.status(500).json(false);
    })
  });

  // log the user in
  app.post("/api/user/login", passport.authenticate("local"), function(req, res){
    res.json(true);
  });

  // log the user out
  app.post("/api/user/logout", function(req, res) {
    req.logout();
    res.sendStatus(200);
  });
};