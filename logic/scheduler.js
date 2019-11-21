module.exports = scheduler;
require("dotenv").config();

const marathonScheduler = require("./marathonScheduler");
//return marathonScheduler(data);

// const marathonScheduler26 = require("./marathonScheduler");
// const marathonScheduler13 = require("./marathonScheduler");
// const marathonScheduler10 = require("./marathonScheduler");
// const marathonScheduler5 = require("./marathonScheduler");

function scheduler(data) {
  if (parseFloat(data.goalDistance) === 26.2) {
    return marathonScheduler(data);
  }
  if (parseFloat(data.goalDistance) === 13.1) {
    return marathonScheduler(data);
  }
  if (parseFloat(data.goalDistance) === 6.2) {
    return marathonScheduler(data);
  }
  if (parseFloat(data.goalDistance) === 3.1) {
    return marathonScheduler(data);
  }
  // if (parseFloat(data.goalDistance) === 26.2) {
  //   return marathonScheduler26(data);
  // }
  // if (parseFloat(data.goalDistance) === 13.1) {
  //   return marathonScheduler13(data);
  // }
  // if (parseFloat(data.goalDistance) === 6.2) {
  //   return marathonScheduler10(data);
  // }
  // if (parseFloat(data.goalDistance) === 3.1) {
  //   return marathonScheduler5(data);
  // }
}
