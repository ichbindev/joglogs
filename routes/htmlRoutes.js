const db = require("../models");
const path = require("path");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/setup", function(req, res) {
    // if (!req.isAuthenticated()) {
    //   return res.render("401");
    // }
    res.sendFile(path.join(__dirname, "../public/html/setup.html"));
  });

  app.get("/calendar", function(req, res) {
    // if (!req.isAuthenticated()) {
    //   return res.render("401");
    // }
    res.sendFile(path.join(__dirname, "../public/html/calendar.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
