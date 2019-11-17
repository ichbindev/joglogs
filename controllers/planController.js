const db = require("../models");
const schedule = require("../logic/scheduler");
const createGoogleCalendar = require("../logic/createGoogleCalendar");

// Defining methods for the booksController
module.exports = {
  createPlan: function(req, res) {
    const { mpw, goalDistance, raceDate, longRun, days, raceName } = req.body;
    const plan = {
      UserId: req.user.id,
      startDistance: mpw,
      startDate: new Date().setDate(new Date().getDate() + 1),
      longRunDay: longRun,
      runDays: JSON.stringify(days),
      raceDistance: goalDistance,
      raceDate,
      raceName
    };
    db.Plan.create(plan)
      .then(function(newPlan) {
        // create events
        const events = schedule(req.body);
        // give it the plan ID
        events.forEach(e => {
          e.PlanId = newPlan.id;
        });
        // save in db
        db.Event.bulkCreate(events, { returning: true }).then(function() {
          res.json(true);
        });
      })
      .catch(function(error) {
        console.log(error);
        return res.status(500).end();
      });
  },
  // TODO: change findOne to findAll to deal with multiple plans
  getPlan: function(req, res) {
    if (!req.isAuthenticated()) {
      return res.status(401).json(false);
    }
    db.Plan.findAll({
      limit: 1,
      where: {
        UserId: req.user.id
      },
      order: [["id", "DESC"]]
    })
      .then(function(planData) {
        planData = planData[0];
        if (!planData) {
          // nothing found
          return res.status(404).json(false);
        }
        db.Event.findAll({
          where: {
            PlanId: planData.id
          }
        }).then(function(events) {
          const result = {
            name: planData.raceName,
            events: events
          };
          res.json(result);
        });
      })
      .catch(function(err) {
        console.log(err);
        return res.status(404).json(false);
      });
  },
  hasPlan: function(req, res) {
    db.Plan.findOne({
      where: {
        UserId: req.user.id
      }
    })
      .then(function(data) {
        if (!data) {
          // nothing found
          return res.status(404).json(false);
        }
        // return the calendar reference
        res.json(true);
      })
      .catch(function(err) {
        console.log(err);
        return res.status(500).json(false);
      });
  },
  sync: function(req, res) {
    // check if they already have a calendar generated: req.body.calendar ref
    // if the do, stop
    // get user email: req.user.username
    // get race name: req.body.raceName
    // get events: req.body.events
    // create an object that Perry's function likes
    // call perry's function
    // take the calendar link that perry sent us
    // send it back with res.json
    let eventData = {
      events: req.body.events,
      gmailAddress: req.user.username,
      raceName: req.body.raceName,
      calendarRef: req.body.calendarRef
    };
    if (!eventData.calendarRef) {
      function cb(result) {
        if (!result) {
          db.Plan.update(
            { calendarRef: result },
            { where: { UserId: req.user.id } }
          ).then(function() {
            res.json(result);
          });
        }
      }
      console.log("calendarRef not set! Creating google calendar...");
      createGoogleCalendar(eventData, cb);
    }
  },
  updatePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  deletePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  }
};
