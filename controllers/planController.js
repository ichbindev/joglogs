const db = require("../models");
const schedule = require("../logic/scheduler");

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
        console.log(JSON.stringify(events));
        db.Event.bulkCreate(events, { returning: true }).then(function() {
          res.json(true);
        });
      })
      .catch(function(error) {
        console.log(error);
        return res.status(500).end();
      });
  },
  getPlan: function(req, res) {
    if (!req.isAuthenticated()) {
      return res.status(401).json(false);
    }
    db.Plan.findOne({
      where: {
        UserId: req.user.id
      }
    })
      .then(function(planData) {
        if (!planData) {
          // nothing found
          return res.status(404).json(false);
        }
        const PlanId = planData.id;
        db.Event.findAll({ where: { PlanId } }).then(function(eventData) {
          const result = {
            name: planData.raceName,
            events: eventData
          };
          console.log("******RESULT*****" + result.name)
          return res.json(result);
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
  updatePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  deletePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  }
};
