require("dotenv").config();
const planController = require("../controllers/planController");

module.exports = function(app) {
  // get the first plan found associated with the logged in user
  app.get("/api/plans", function(req, res) {
    return planController.getPlan(req, res);
  });

  // shorter get method to quickly check for page redirect
  app.get("/api/plans/check", function(req, res) {
    return planController.hasPlan(req, res);
  });

  // create a calendar with createCalendar then save it in the database
  // NOTE: createCalendar will continue running after the calendar is
  // returned, it will make events for the calendar
  app.post("/api/calendar", function(req, res) {
    return planController.createPlan(req, res);
  });
};
