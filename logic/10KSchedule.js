showLogs = true; //true = shows lots of console log stuff, false shows "ERROR containing messages only"
function logthis(stuff) {
  if (showLogs || stuff.includes("ERROR")) {
    console.log(stuff);
  }
}

// This function returns the running schedule for a 26.2 mile marathon.
// it expects the following data array:
// startMilesPerWeek: "7",
// raceMiles: "26.2",
// runTuesday: true,
// runThursday: true,
// runSaturday: true,
// runSunday: true,
// longRunDay: "4", (4=Thursday)
// raceName: "Austin Marathon",
// raceDate: "2021-01-01"
// maybe startDate for the first day of training??

function marathonSchedule(data) {
  //set trainingStartDate as tomorrow in format "2019-11-30"
  let calculateStartDate = new Date().setDate(new Date().getDate() + 1);
  calculateStartDate =
    new Date(calculateStartDate).toJSON().substr(0, 10) + "T12:00:00";

  let runnerData = [];
  let day = [];

  if (data === undefined) {
    logthis(
      "ERROR! ***** data for runner was undefined, using sample data *****"
    );
    // setup sample data
    // sample Race date is today + ??? days
    let sampleRaceDate = new Date().setDate(new Date().getDate() + 100);
    sampleRaceDate = new Date(sampleRaceDate).toJSON().substr(0, 10);
    //console.log("date = "+new Date(Date.now()).toJSON().substr(0, 10) );
    let sampleData = [];

    sampleData = {
      startMilesPerWeek: "7",
      raceMiles: "26.2",
      runTuesday: true,
      runThursday: true,
      runSaturday: true,
      runSunday: true,
      longRunDay: "4",
      raceName: "No Data sent. used Sample Race Data " + Date.now(),
      raceDate: sampleRaceDate
    };
    // use sampleDate

    runnerData = sampleData;
  } else {
    runnerData = data;
  }
  // add trainingStartDate in anticipation of this being an option in future, currently starts "tomorrow"
  runnerData.startDate = calculateStartDate;
  logthis("runnerData = " + JSON.stringify(runnerData));

  // convert incoming number strings to numbers:
  runnerData.startMilesPerWeek = parseFloat(runnerData.startMilesPerWeek);
  runnerData.raceMiles = parseFloat(runnerData.raceMiles);
  runnerData.longRunDay = parseInt(runnerData.longRunDay);

  // Time for some calculations!! What Fun!

  //Calculate running days per week from runnerdata:
  let runsPerWeek = 0;
  let runDays = [];
  if (runnerData.runSunday) {
    runsPerWeek++;
    runDays.push(0);
  }
  if (runnerData.runMonday) {
    runsPerWeek++;
    runDays.push(1);
  }
  if (runnerData.runTuesday) {
    runsPerWeek++;
    runDays.push(2);
  }
  if (runnerData.runWednesday) {
    runsPerWeek++;
    runDays.push(3);
  }
  if (runnerData.runThursday) {
    runsPerWeek++;
    runDays.push(4);
  }
  if (runnerData.runFriday) {
    runsPerWeek++;
    runDays.push(5);
  }
  if (runnerData.runSaturday) {
    runsPerWeek++;
    runDays.push(6);
  }

  // put runDays in order, ending with their chosen longRunDay.. (make the longRunDay the last day of schedule week.)
  runDays.sort();
  // while (runDays[runDays.length - 1] > runnerData.longRunDay) {
  //     runDays.unshift(runDays.pop());
  // }

  while (runDays[runDays.length - 1] > runnerData.longRunDay) {
    runDays[runDays.length - 1] = runDays[runDays.length - 1] - 7;
    runDays.sort();
  }

  logthis("runDays ordered with long run last = " + runDays);
  logthis("\nCalculated Data Using runnerData:\n");
  logthis("runDays =" + runDays);
  logthis("runsPerWeek = " + runsPerWeek);
  // Calculate how many weeks of training:

  // Take off Last 14 days for pre-marathon taper (only 26.2 mile marathons have 2 week taper)
  // milliseconds in one day = 24hrs X 60 minutes X 60 Seconds X 1,000 milliseconds
  let lastRegularTrainingDay =
    new Date(runnerData.raceDate + "T12:00:00").getTime() -
    24 * 60 * 60 * 1000 * 14; //= 14 days
  logthis(
    "lastRegularTrainingDay (before taper) = " +
      new Date(lastRegularTrainingDay).toJSON().substr(0, 10)
  );

  //convert the other date values to time in milliseconds javascript native..
  runnerData.startDate = new Date(runnerData.startDate).getTime();
  logthis(
    "startDate in ms = " +
      runnerData.startDate +
      " = " +
      new Date(runnerData.startDate)
  );

  runnerData.raceDate = new Date(runnerData.raceDate + "T12:00:00").getTime();
  logthis(
    "raceDate in ms = " +
      runnerData.raceDate +
      " = " +
      new Date(runnerData.raceDate)
  );

  //calculate time diff between training start date and last training date
  const timeDifference = lastRegularTrainingDay - runnerData.startDate;
  // calculate the no. of days between two dates by dividing by a day of milliseconds
  const dayDifference = timeDifference / (1000 * 3600 * 24);
  logthis("total days of training time = " + dayDifference);
  // calculate totalweeks to train
  const weeksToTrain = 1 + parseInt(dayDifference / 7);
  logthis("total weeks of training time = " + weeksToTrain);

  // calculate totalTrainingSessions
  const totalSessions = runsPerWeek * weeksToTrain;
  logthis("total run sessions (weeks x perweek) = " + totalSessions);

  // figure out if we are going to exceed max miles per week with default weeklyIncrement miles per week increase..
  // If we exceed peak, then adjust the weeklyIncrement downward to meet peak goal.
  let weeklyIncrement = 3;
  let maxMilesPerWeek = 65;
  logthis("maxMilesPerWeek is = " + maxMilesPerWeek);
  if (
    runnerData.startMilesPerWeek + weeksToTrain * weeklyIncrement >
    maxMilesPerWeek
  ) {
    // Compute new weeklyIncrement to reach max miles per week in the number of weeks of training.
    weeklyIncrement =
      (maxMilesPerWeek - runnerData.startMilesPerWeek) / weeksToTrain;
  }
  logthis(
    "weeklyIncrement adjusted down if runner exceeds maxMilesPerWeek = " +
      weeklyIncrement
  );
  logthis(
    "The peak miles per week will reach " +
      (weeklyIncrement * weeksToTrain + runnerData.startMilesPerWeek)
  );

  day[0] = {
    percentMilesPerWeek: 12.5,
    description: "Easy Run Day, 1/8th of your weekly Run"
  };
  day[1] = {
    percentMilesPerWeek: 25,
    description: "Medium Run Day, 25% of Total Week Run"
  };
  day[2] = {
    percentMilesPerWeek: 12.5,
    description: "Easy Run Day, 1/8th of your weekly Run"
  };
  day[3] = {
    percentMilesPerWeek: 50,
    description: "Long Run Day, 50% of Total Week Run"
  };
  // add chosen run days and day names
  dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  for (let i = 0; i < runDays.length; i++) {
    day[i].dayNumber = runDays[i];
    day[i].dayOfWeek = dayNames[runDays[i]];
  }

  logthis("run days (computed from Sunday) array:");
  logthis(day);

  logthis("Last training day=" + new Date(lastRegularTrainingDay));

  //scheduleWeekStart= new Date(scheduleWeekStart).toISOString().substr(0,10)+"T12:00:00";
  let dayOfMilliseconds = 24 * 60 * 60 * 1000; // 24hrs X 60min X 60secs X 1,000 milliseconds  = 1 day.
  let event = [];
  let events = [];
  let weekNumber = 0;
  let eventCounter = 0;
  let todayNoon = new Date().toISOString().substr(0, 10) + "T12:00:00";
  let scheduleWeekStart = new Date(todayNoon).setDate(
    new Date().getDate() - new Date(todayNoon).getDay() + 1
  );
  logthis("last Sunday = " + new Date(scheduleWeekStart));
  let tempEventDate = new Date().getTime();
  logthis(
    "tempEventDate = " +
      tempEventDate +
      "\nlastRegularTrainingDay = " +
      lastRegularTrainingDay
  );
  while (tempEventDate <= lastRegularTrainingDay) {
    weekNumber++;
    for (let i = 0; i < runDays.length; i++) {
      // get value of 1st runDays[] and multiply by days, then add to Sunday week start to get first event of week
      //(first event may be negative day to make long run the last day of the weeks events)
      tempEventDate =
        scheduleWeekStart +
        runDays[i] * dayOfMilliseconds +
        7 * weekNumber * dayOfMilliseconds;
      //if( (tempEventDate >= runnerData.startDate) && (tempEventDate <= lastRegularTrainingDay) ){
      eventCounter++;
      event.number = eventCounter;
      event.dateMSecs = tempEventDate;
      event.date = new Date(event.dateMSecs);
      event.description = day[i].description;
      event.percentMilesPerWeek = day[i].percentMilesPerWeek;
      event.milesToRunToday =
        Math.round(
          (runnerData.startMilesPerWeek + weeklyIncrement * weekNumber) *
            (day[i].percentMilesPerWeek / 100) *
            10
        ) / 10;
      event.mileTotalThisWeek =
        Math.round(
          (runnerData.startMilesPerWeek + weeklyIncrement * weekNumber) * 10
        ) / 10;

      //logthis("event:");
      //logthis(event);
      //}
      events.push(event);
      event = [];
    }

    eventDay = tempEventDate;
  }
  logthis("\n\n\nevents:\n");
  logthis(events);
  logthis("all Done");

  //Review sample:
  // runDays = {1,3,5,6} =Mon, Wed, Fri, Sat
  // longRunDay = 3  (Wednesday)
  // runnerData.StartMilesPerWeek
  // weeklyIncrement = 3 - total miles increase per week
  // runnerData.race
  //  weeksToTrain = parseInt(dayDifference / 7);

  // runDays = {1,3,5,6} =Mon, Wed, Fri, Sat
  // longRunDay = 3  (Wednesday)
}

marathonSchedule();
