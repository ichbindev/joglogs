const db = require("../models");
const createCalendar = require("../logic/createCalendar");

// Defining methods for the booksController
module.exports = {
  createPlan: function(req, res) {
    // grabbing the google account to use from the .env file
    const googleCred = process.env.GOOGLEACCOUNT;
    const calendarInfo = {
      summary: req.body.raceName,
      trainingStartDate: new Date(),
      trainingEndDate: req.body.raceDate,
      trainingStartMiles: parseFloat(req.body.mpw),
      trainingEndMiles: parseFloat(req.body.goalDistance),
      trainingSessionsPerWeek: req.body.days.length,
      runnersGoogleEmail: req.user.username,
      whichGoogleAccountInteger: googleCred
    };
    // this is where the large JS file with calendar logic is called
    // TODO: in 2.0 this needs to be changed to store above data
    createCalendar(calendarInfo, function(calendarId) {
      if (calendarId) {
        let plan = {};
        plan.calendarRef = calendarId;
        plan.UserID = req.user.id;
        // since we now have a calendar reference, save it in the database
        db.Plan.create({
          calendarRef: calendarId,
          credentialRef: googleCred,
          UserId: req.user.id
        })
          .then(function() {
            return res.json(true);
          })
          .catch(function(err) {
            if (err) {
              console.log(err);
              return res.status(500).end();
            }
          });
      } else {
        return res.status(429).end();
      }
    });
  },
  getPlan: function(req, res) {
    if (!req.isAuthenticated()) {
      return res.status(401).json(false);
    }
    db.Plan.findOne({
      where: {
        UserID: req.user.id
      }
    })
      .then(function(data) {
        if (!data) {
          // nothing found
          return res.status(404).json(false);
        }
        // return the calendar reference
        res.json(data.calendarRef);
      })
      .catch(function(err) {
        console.log(err);
        return res.status(404).json(false);
      });
  },
  updatePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  deletePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  }
};
