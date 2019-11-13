module.exports = scheduler.js;
require("dotenv").config();
require("./marathonScheduler26");
require("./marathonScheduler13");
require("./marathonScheduler10");
require("./marathonScheduler5");

function scheduler(data, cb) {
  respond = cb;

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
