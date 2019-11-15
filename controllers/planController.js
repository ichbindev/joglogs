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
        db.Event.bulkCreate(events, { returning: true }).then(function() {
          res.json(true);
        });
      })
      .catch(function(error) {
        console.log(error);
        return res
          .status(500)
          .json(
            "The server encountered an error. Please try again in a few minutes."
          );
      });
  },
  // TODO: change findOne to findAll to deal with multiple plans
  getPlan: function(req, res) {
    if (!req.isAuthenticated()) {
      return res
        .status(401)
        .json("You are not logged in, please log in and try again.");
    }
    db.Plan.findOne({
      where: {
        UserId: req.user.id
      }
    })
      .then(function(planData) {
        if (!planData) {
          // nothing found
          return res
            .status(404)
            .json(
              "No plan was found matching your account. Please create a plan at /setup."
            );
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
        return res
          .status(500)
          .json(
            "The server encountered an error. Please try again in a few minutes."
          );
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
          return res
            .status(404)
            .json(
              "No plan found matching your account. Please create a plan at /setup."
            );
        }
        // return the calendar reference
        res.json(true);
      })
      .catch(function(err) {
        console.log(err);
        return res
          .status(500)
          .json(
            "The server encountered an error. Please try again in a few minutes."
          );
      });
  },
  updatePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  },
  deletePlan: function(req, res) {
    res.status(501).json("Not yet implemented.");
  }
};
