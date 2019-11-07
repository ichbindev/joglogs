var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

// pretty basic local strategy
// user model really only has username, password and id
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    function(username, password, done) {
      db.User.findOne({
        where: {
          username: username
        }
      })
        .then(function(dbUser) {
          if (dbUser && dbUser.checkPassword(password)) {
            return done(null, dbUser);
          } else {
            return done("Incorrect username or password");
          }
        })
        .catch(function(err) {
          return done(err);
        });
    }
  )
);

passport.serializeUser(function(user, cb) {
  return cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  db.User.findOne({
    where: {
      id: obj.id
    }
  })
    .then(function(user) {
      cb(null, user);
    })
    .catch(function(err) {
      cb(err);
    });
});

module.exports = passport;
