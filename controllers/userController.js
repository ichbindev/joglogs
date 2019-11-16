const db = require("../models");

// Defining methods for the booksController
module.exports = {
  createUser: function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    db.User.create({
      username,
      password
    })
      .then(function(data) {
        console.log("Signed up " + username);
        res.json(data.username);
      })
      .catch(function(err) {
        console.log(err);
        // username already exists
        res.status(400).json("An account already exists with that email.");
      });
  },
  getUser: function(req, res) {
    if (!req.isAuthenticated()) {
      return res.status(401).json(false);
    }
    return res.json(true);
  },
  updateUser: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  deleteUser: function(req, res) {
    res.status(501).json("Not yet implemented.");
  }
};
