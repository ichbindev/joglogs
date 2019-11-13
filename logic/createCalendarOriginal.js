module.exports = createCalendar;
require("dotenv").config();
var respond;

function createCalendar(calendarInfo, cb) {
  respond = cb;

  // if AccountInteger is out of range, use default # 1:
  if (
    calendarInfo.whichGoogleAccountInteger < 1 ||
    calendarInfo.whichGoogleAccountInteger > 2
  ) {
    calendarInfo.whichGoogleAccountInteger = 1;
  }
  // const readline = require("readline");
  const { google } = require("googleapis"); // just downloads the 'google' part out of this large googleaplis (destructuring)
  // const SCOPES = ["https://www.googleapis.com/auth/calendar"];

  // Assign the proper Google Auth account based on 'whichGoogleAccountInteger'
  var token = process.env.TOKEN1 || "No Token Found in env file";
  var credentials = process.env.CREDENTIALS1 || "No Token Found in env file";

  if (calendarInfo.whichGoogleAccountInteger === 2) {
    token = process.env.TOKEN2 || "No Token Found in env file";
    credentials = process.env.CREDENTIALS2 || "No Token Found in env file";
  } else if (calendarInfo.whichGoogleAccountInteger === 3) {
    token = process.env.TOKEN3 || "No Token Found in env file";
    credentials = process.env.CREDENTIALS3 || "No Token Found in env file";
  } else {
    token = process.env.TOKEN1 || "No Token Found in env file";
    credentials = process.env.CREDENTIALS1 || "No Token Found in env file";
  }
  /* eslint-disable */  
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  }
  /* eslint-enable */

  authorize(JSON.parse(credentials), insertCalendar);
  //****************************************** Custom Functions After Authorization completed above

  function insertCalendar(auth) {
    console.log(
      "Trying to Create/Insert New Calendar, Named = " + calendarInfo.summary
    );

    //here we go!
    const calendar = google.calendar({ version: "v3", auth });
    calendar.calendars.insert(
      {
        resource: { summary: calendarInfo.summary }
      },
      function(err, res) {
        if (err) {
          respond(null);
          return console.log("The API returned an error: " + err);
        }
        var calenderInfo = calendarInfo;

        // calenderInfo.summary= res.data.summary;
        console.log(
          "\n\nSuccessfully created Calendar Named : " +
            res.data.summary +
            "\n  with id # " +
            res.data.id +
            "\n and etag: " +
            res.data.etag
        );
        calendarInfo.calendarId = res.data.id;
        respond(calendarInfo.calendarId);
        calendarInfo.etag = res.data.etag;

        shareCalendar(auth, calenderInfo);
        return calenderInfo;
      }
    );
  }

  function shareCalendar(auth, calendarInfo) {
    if (calendarInfo.runnersGoogleEmail) {
      console.log(
        "Now trying to share Calendar with: " + calendarInfo.runnersGoogleEmail
      );
    } else {
      calendarInfo.runnersGoogleEmail = "aaroncentex@gmail.com";
      console.log(
        "calendarInfo.runnersGoogleEmail is blank, so using " +
          calendarInfo.runnersGoogleEmail
      );
    }
    const calendar = google.calendar({ version: "v3", auth });
    calendar.acl.insert(
      {
        calendarId: calendarInfo.calendarId,
        resource: {
          kind: "calendar#aclRule",
          etag: calendarInfo.etag,
          scope: {
            type: "user",
            value: calendarInfo.runnersGoogleEmail
          },
          role: "writer"
        }
      },
      err => {
        if (err) {
          return console.log("Calendar API failed on calendar#aclRule: " + err);
        }

        console.log(
          "Success sharing Calendar using calendar#aclRule to: " +
            calendarInfo.runnersGoogleEmail
        );
        // Now insert the first event:
        insertEvent(auth, calendarInfo);
      }
    );
  }

  function insertEvent(auth, calendarInfo) {
    var makeEvents = [];
    const calendar = google.calendar({ version: "v3", auth });
    // set eventdates as date objects from icoming variables:
    var eventsStartDate = new Date(calendarInfo.trainingStartDate);
    var eventsEndDate = new Date(calendarInfo.trainingEndDate);
    // var calenderId = calendarInfo.calendarId;
    //    console.log("eventsStartDate = "+eventsStartDate+"\neventEndDate = "+eventsEndDate)
    //calculate the time in milliseconds difference of two dates
    var timeDifference = eventsEndDate.getTime() - eventsStartDate.getTime();
    // calculate the no. of days between two dates by dividing by a day of milliseconds
    var dayDifference = timeDifference / (1000 * 3600 * 24);
    // calculate totalweeks to train
    var weeksToTrain = parseInt(dayDifference / 7);
    // calculate totalTrainingSessions
    // var totalSessions = calendarInfo.trainingSessionsPerWeek * weeksToTrain;
    var endingMiles = parseFloat(calendarInfo.trainingEndMiles);
    var startingMiles = parseFloat(calendarInfo.trainingStartMiles);
    var weeklyImprovement = (endingMiles - startingMiles) / weeksToTrain;
    // var perSessionImprovement = weeklyImprovement / totalSessions;
    var endDateMs = eventsEndDate.getTime();
    // var startDateMs = eventsStartDate.getTime();
    // const sleep = milliseconds => {
    //   return new Promise(resolve => setTimeout(resolve, milliseconds));
    // };
    var weeksLeft = 0;
    var makeEvent = [];
    var makeEvents = [];
    for (var i = 0; i < 180; i++) {
      eventDate = new Date(endDateMs - i * 3600 * 24 * 1000); //date in milliseconds, minus offset * one day of milliseconds
      //     console.log("ForLoop New eventDate = "+eventDate)
      theDay = eventDate.toString().substring(0, 3);

      //Saturday LONG Run
      if (theDay === "Sat") {
        weeksLeft++;
        makeEvent = [];
        endingMiles = endingMiles - weeklyImprovement;
        //    console.log("Saturday event triggering 4 entries ===" + eventDate);
        milesToday = endingMiles / 2;
        makeEvent.thisEventdescription =
          "Big " +
          calendarInfo.summary +
          " Saturday Run! " +
          Math.round(milesToday) +
          " Mile Run Today. " +
          Math.round(weeksLeft) +
          " Weeks of Training Left for Marathon : " +
          calendarInfo.summary +
          "!";
        makeEvent.thisDate = eventDate.toISOString().substring(0, 10);
        makeEvents.unshift(makeEvent);

        //Thursday Run
        makeEvent = [];
        milesToday = endingMiles / 6;
        makeEvent.thisEventdescription =
          "Thursday " +
          calendarInfo.summary +
          " Fun Run! " +
          Math.round(milesToday) +
          " Mile Run Today. " +
          Math.round(weeksLeft) +
          " Weeks of Training Left for Marathon : " +
          calendarInfo.summary +
          "!";
        thursdayDate = new Date(endDateMs - (i + 2) * 3600 * 24 * 1000); // thursday Date is from Saturday minus 2 more days
        makeEvent.thisDate = thursdayDate.toISOString().substring(0, 10);
        if (thursdayDate > new Date()) {
          makeEvents.unshift(makeEvent);
        }

        //Tuesday Run
        makeEvent = [];
        milesToday = endingMiles / 6;
        makeEvent.thisEventdescription =
          "Tuesday Jog for " +
          calendarInfo.summary +
          " ! " +
          Math.round(milesToday) +
          " Mile Run Today. " +
          weeksLeft +
          " Weeks of Training Left for Marathon : " +
          calendarInfo.summary +
          "!";
        tuesdayDate = new Date(endDateMs - (i + 4) * 3600 * 24 * 1000); // tuesday Date is from Saturday minus 4 more days
        makeEvent.thisDate = tuesdayDate.toISOString().substring(0, 10);
        if (tuesdayDate > new Date()) {
          makeEvents.unshift(makeEvent);
        }

        //Monday Run
        makeEvent = [];
        milesToday = endingMiles / 6;
        makeEvent.thisEventdescription =
          "Monday Marathon Training! " +
          Math.round(milesToday) +
          " Mile Run Today. " +
          Math.round(weeksLeft) +
          " Weeks of Training Left for Marathon : " +
          calendarInfo.summary +
          "!";
        mondayDate = new Date(endDateMs - (i + 5) * 3600 * 24 * 1000); // Monday Date is from Saturday minus 5 days
        makeEvent.thisDate = mondayDate.toISOString().substring(0, 10);
        if (mondayDate > new Date()) {
          makeEvents.unshift(makeEvent);
        }
      }

      if (eventDate <= new Date()) {
        console.log("all done creating calendar events");
        console.log("calendar id = " + calendarInfo.calendarId);
        console.log(
          "\n\n Total Number of Events To Add to Calendar = " +
            makeEvents.length
        );

        //****************************************************************  REDUCE Function *************************
        //****************************************************************  REDUCE Function *************************
        console.log("start of reduce strategy");
        var eventCount = 0;
        var makeEvents = makeEvents;
        var arrItems = makeEvents;
        //    console.log("arrItems = ", arrItems)
        function methodThatReturnsAPromise(anEvent) {
          return new Promise(resolve => {
            setTimeout(() => {
              // console.log(`Creating event at ${anEvent}`+nextId);
              //        console.log("makeEvents[i] = ", anEvent);
              addThisEvent(anEvent).then(function() {
                resolve();
              });
            }, 150);
          });
        }

        arrItems.reduce(function(prevPromise, anEvent) {
          return prevPromise.then(function() {
            return methodThatReturnsAPromise(anEvent);
          });
        }, Promise.resolve());

        //**************************************************************** END of REDUCE Function *************************
        //**************************************************************** End of REDUCE Function *************************
        return;
      }
    }
    function addThisEvent(makeEvent) {
      //console.log("make this event = ", makeEvent);

      var event = {
        summary: "Run Scheduled: " + makeEvent.thisEventdescription,
        // 'location': 'Austin, TX',
        description: makeEvent.thisEventdescription,
        start: {
          dateTime: makeEvent.thisDate + "T14:00:00-05:00",
          timeZone: "America/Chicago"
        },
        end: {
          dateTime: makeEvent.thisDate + "T19:00:00-05:00",
          timeZone: "America/Chicago"
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 60 },
            { method: "popup", minutes: 60 }
          ]
        }
      };

      // insert the event:
      return new Promise(function(resolve, reject) {
        calendar.events.insert(
          {
            auth: auth,
            calendarId: calendarInfo.calendarId,
            resource: event
          },
          function(err, event) {
            if (err) {
              console.log(
                "calender.events.insert failed in Calendar service: " + err
              );
              reject(err);
            }
            eventCount++;
            console.log("Event " + eventCount + " Successfully Created");
            //    console.log('\n\n event.data = ', event.data);

            resolve(event.data);
          }
        );
      });
    }
  }
}
