// test data:
let milesThisWeek = 85;

function logthis(msg) {
  console.log(msg);
}

// test data:
let day = [];
day[0] = {
  percentMilesPerWeek: 12.5,
  description: "Easy Run Day, 1/8th of your weekly Run"
};
day[1] = {
  percentMilesPerWeek: 25,
  description: "Medium Run Day, 25% of Total Week Run"
};
day[2] = {
  percentMilesPerWeek: 2.5,
  description: "Easy Run Day, 1/8th of your weekly Run"
};
day[3] = {
  percentMilesPerWeek: 50,
  description: "Long Run Day, 50% of Total Week Run"
};
day[4] = {
  percentMilesPerWeek: 5,
  description: "Wimpy Run Day, 5% of Total Week Run"
};
day[5] = {
  percentMilesPerWeek: 5,
  description: "Wimpy Run Day, 5% of Total Week Run"
};

// the following was transferred into marathon js..

// If any run is over 20 miles, we must redistribute the extra miles onto easier days.

// create mileTest Array slice in a duplicate of the day array
let mileTest = day.slice(0);
// now I loop through the array and add a field to hold the original day order of the array, since I am about to sort by run length percentages
for (i = 0; i < day.length; i++) {
  mileTest[i].dayorder = i;
}
// Sort milesTest array by longest run to shortest, using teh percentMilesPerWeek key
mileTest.sort((a, b) => a.percentMilesPerWeek - b.percentMilesPerWeek);
// declare remainder variable for overflow miles
let remainder = 0;
//Loop through run, and if any run exceeds 20 miles, spread remainder over the remaining shorter runs
for (i = mileTest.length - 1; i >= 0; i--) {
  // eslint-disable-next-line prettier/prettier
  logthis("i = " + i + " milesThisWeek = " + milesThisWeek + " mileTest[i].percentMilesPerWeek = " + mileTest[i].percentMilesPerWeek );

  // get normal calculation for this run day
  calcRunByPercent = (milesThisWeek * mileTest[i].percentMilesPerWeek) / 100;
  logthis("normal calcRunByPercent = " + calcRunByPercent);
  // add portion of remainder miles by dividing remainder miles by remaining runs (i+1)
  calcRunPlusRemainder = calcRunByPercent + remainder / (i + 1);
  // deduct the same portion of miles from the remainder
  remainder = remainder - remainder / (i + 1);
  logthis("with portion of remainder if applicable =" + calcRunPlusRemainder);
  // if THIS run ends up longer than 20 miles, reduce to 20, and toss the rest into remainder variable
  if (calcRunPlusRemainder > 20) {
    // put miles over 20 into remainder
    remainder = calcRunPlusRemainder - 20 + remainder;
    // Since it was over 20, set miles to 20
    calcMilesToRun = 20;
  } else {
    // since calcuRunPlusRemainder was under 20, use it for todays miles to run.
    calcMilesToRun = calcRunPlusRemainder;
  }
  // set todays calcMilesToRun in the milesTest array for use on event builder
  mileTest[i].calcMilesToRun = calcMilesToRun;

  // eslint-disable-next-line prettier/prettier
  logthis( "for runtest " + i + " (" + mileTest[i].percentMilesPerWeek +"%) the run is " + calcMilesToRun + ". and the remainder is now " + remainder);
}

// reSort by original day order so they are called in correct order.
mileTest.sort((a, b) => a.dayorder - b.dayorder);

logthis(mileTest);
