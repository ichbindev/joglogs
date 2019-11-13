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
        res.status(500).json(false);
      });
  },
  getUser: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  updateUser: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  deleteUser: function(req, res) {
    res.status(501).json("Not yet implemented.");
  }
};
