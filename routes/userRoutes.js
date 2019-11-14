const passport = require("../config/passport");
const userController = require("../controllers/userController");

module.exports = function(app) {
  // create a new user
  app.post("/api/user/signup", function(req, res) {
    return userController.createUser(req, res);
  });

  // log the user in
  app.post("/api/user/login", passport.authenticate("local"), function(
    // line is too long so prettier made it ugly
    req,
    res
  ) {
    console.log("Logged in " + req.body.username);
    res.json(true);
  });

  // log the user out
  app.post("/api/user/logout", function(req, res) {
    req.logout();
    res.sendStatus(200);
  });
};
