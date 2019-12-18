module.exports = marathonScheduler;

showLogs = true; //true = shows lots of console log stuff, false shows "ERROR containing messages only"
function logthis(stuff) {
  if (showLogs || stuff.includes("ERROR")) {
    console.log(stuff);
  }
}

// COMMENT OUT THE NEXT LINE IF NOT TESTING:
// data = {
//   mpw: 0,
//   days: ["1", "2", "3", "4"],
//   longRun: "2",
//   goalDistance: 26.2,
//   raceName: "TEST Data, comment out function called if production",
//   raceDate: "2020-07-01"
// };
//marathonScheduler();

function marathonScheduler(data) {
  let runnerData = [];
  // if no data received with function.
  if (data === undefined) {
    logthis(
      "ERROR! ***** marathonScheduler?? (data) for runner was undefined using sample data ************** "
    );
    // The following will run with test data for testing only
    // use default test data:
    // days: ["0", "2", "3", "4", "5"],

    data = {
      mpw: 0,
      days: ["1", "2", "3", "4"],
      longRun: "2",
      goalDistance: 26.2,
      raceName: "TEST Data, comment out function called if production",
      raceDate: "2020-07-01"
    };
    logthis(data);
  }

  runnerData = data;

  //set trainingStartDate as tomorrow in format "2019-11-30"
  let calculateStartDate = new Date().setDate(new Date().getDate() + 1);
  calculateStartDate =
    new Date(calculateStartDate).toJSON().substr(0, 10) + "T12:00:00";
  logthis("calculateStartDate = " + calculateStartDate);
  // add trainingStartDate in anticipation of this being an option in future, currently starts "tomorrow"
  runnerData.startDate = calculateStartDate;
  logthis("runnerData = " + JSON.stringify(runnerData));
  // beginning mpw must not === 0, start with min 1 mile, to stop divide by zero error.
  if (parseFloat(runnerData.mpw) < 1) {
    runnerData.startMilesPerWeek = 1;
  } else {
    runnerData.startMilesPerWeek = parseFloat(runnerData.mpw);
  }
  runnerData.raceMiles = parseFloat(runnerData.goalDistance);
  logthis("runnerData.raceMiles = " + runnerData.raceMiles);
  runnerData.longRunDay = parseInt(runnerData.longRun);
  if (runnerData.raceName === "") {
    runnerData.raceName = "Run Calendar Created " + YYYYMMDD(new Date());
  }

  // setup some global variables:
  let dayOfMilliseconds = 24 * 60 * 60 * 1000; // 24hrs X 60min X 60secs X 1,000 milliseconds  = 1 day.
  let event = [];
  let events = [];
  let eventCounter = 0;

  let day = [];
  let weekNumber = 0;
  let weekToIncrementNumber = 0;
  let milesThisWeek = runnerData.startMilesPerWeek;
  let weeklyIncrement = 3;
  // Maximum number of mile that should be assigned in a day (depends on length of marathon..)
  // maxMilesPerDay will affect later calculations:
  // if less than 4 run days per week, maxMilesPerWeek = maxMilesPerDay * 2.3
  // if 4 or more runs per week, maxMilesPerWeek = runnerData.raceMiles * 2.5
  let maxMilesPerWeek;
  