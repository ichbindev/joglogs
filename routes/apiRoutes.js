var db = require("../models");
require("dotenv").config();
var createCalendar=require("../logic/createCalendar");

module.exports = function (app) {
  // get the first plan found associated with the logged in user
  app.get("/api/plans/", function (req, res) {
    if (!req.isAuthenticated()) {
      return res.status(401).json(false);
    }
    db.Plan.findOne({
      where: {
        UserID: req.user.id
      }
    }).then(function (data) {
      if (!data) {
        // nothing found
        return res.status(404).json(false);
      }
      // return the calendar reference
      res.json(data.calendarRef);
    }).catch(function(err) {
      console.log(err);
      return res.status(404).json(false);
    });;
  });

  // create a calendar with createCalendar then save it in the database
  // NOTE: createCalendar will continue running after the calendar is 
  // returned, it will make events for the calendar
  app.post("/api/calendar", function(req, res) {
    // grabbing the google account to use from the .env file
    var googleCred = process.env.GOOGLEACCOUNT;
    var calendarInfo = {
      summary: req.body.raceName,
      trainingStartDate: new Date(),
      trainingEndDate: req.body.endDate,
      trainingStartMiles: parseFloat(req.body.mpw),
      trainingEndMiles: parseFloat(req.body.goalDistance),
      trainingSessionsPerWeek: 4,
      runnersGoogleEmail: req.user.username,
      whichGoogleAccountInteger: googleCred
    };
    // this is where the large JS file with calendar logic is called
    createCalendar(calendarInfo, function(calendarId) {
      if (calendarId) {
        var plan = {};
        plan.calendarRef = calendarId;
        plan.UserID = req.user.id;
        // since we now have a calendar reference, save it in the database
        db.Plan.create({
          calendarRef: calendarId,
          credentialRef: googleCred,
          UserId: req.user.id
        }).then(function() {
          return res.json(true);  
        }).catch(function(err) {
          if (err) {
            console.log(err);
            return res.status(500).end();
          }
        }); 
    } else {
      return res.status(429).end();
    }
    });
  });
};
