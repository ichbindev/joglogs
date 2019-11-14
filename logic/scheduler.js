module.exports = scheduler;
require("dotenv").config();
const marathonScheduler26 = require("./marathonScheduler26");
const marathonScheduler13 = require("./marathonScheduler13");
const marathonScheduler10 = require("./marathonScheduler10k");
const marathonScheduler5 = require("./marathonScheduler5k");

function scheduler(data) {
  if (parseFloat(data.goalDistance) === 26.2) {
    return marathonScheduler26(data);
  }
  if (parseFloat(data.goalDistance) === 13.1) {
    return marathonScheduler13(data);
  }

  if (parseFloat(data.goalDistance) === 6.2) {
    return marathonScheduler10(data);
  }
  if (parseFloat(data.goalDistance) === 3.1) {
    return marathonScheduler5(data);
  }
}
