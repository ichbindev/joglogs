module.exports = createGoogleCalendar;
require("dotenv").config();
let respond;

showLogs = true; //true = shows lots of console log stuff, false shows "ERROR containing messages only"
function logthis(stuff) {
  if (showLogs || stuff.includes("ERROR")) {
    console.log(stuff);
  }
}

//sample data:
let events = [];
events.push(
  {
    number: "4",
    dateTime: "2019-11-24",
    percentMilesPerWeek: "50",
    mileTotalThisWeek: "13",
    runDistance: "7",
    title: "7 mile run today. 5 weeks til Marathon. ",
    description:
      "Long Run.  Long runs are your most crucial run of the week.  They will help build physical and mental endurance for race day.  Long run efforts should be executed at your targeted race pace or slower."
  },
  {
    number: "5",
    dateTime: "2019-11-26",
    percentMilesPerWeek: "12.5",
    mileTotalThisWeek: "16",
    runDistance: "2",
    title: "2 mile run today. 5 weeks til Marathon. ",
    description:
      "Easy Effort.  Easy runs should be executed at a relaxed effort where breathing is comfortable.  They will help you recover from your other runs."
  },
  {
    number: "6",
    dateTime: "2019-11-28",
    percentMilesPerWeek: "25",
    mileTotalThisWeek: "16",
    runDistance: "4",
    title: "4 mile run today. 4 weeks til Marathon. ",
    description:
      "Speed Development.  Developing speed will set you up for success on race day.  They serve as both physical and mental conditioning. Speed workouts should be executed at harder effort than race pace."
  }
);

let gmailAddress; // = "perrywilliams@800appliance.com";
let eventData = [];
eventData.gmailAddress = "perrywilliams@800appliance.com";
eventData.raceName = "Test Race " + Date.now();
eventData.events = events;
//logthis("Test eventData:");
//logthis(eventData);

createGoogleCalendar(gmailAddress, eventData);

function createGoogleCalendar(gmailAddress, eventData, cb) {
  respond = cb;
  let calendar = "";
  let auth = "";
  let eventCount = 0;
  let calendarInfo = [];
  let events = eventData.events;
  gmailAddress = eventData.gmailAddress;
  logthis(eventData.raceName);
  logthis("gmailAddress = " + gmailAddress);
  logthis("events:");
  logthis(events);

  logthis("Test eventData AGAIN:");
  logthis(eventData);

  // if AccountInteger is out of range, use default # 1:
  // if (
  //   calendarInfo.whichGoogleAccountInteger < 1 ||
  //   calendarInfo.whichGoogleAccountInteger > 3
  // ) {
  //calendarInfo.whichGoogleAccountInteger = 1;
  //  }
  // const readline = require("readline");
  const { google } = require("googleapis"); // just downloads the 'google' part out of this large googleaplis (destructuring)
  // const SCOPES = ["https://www.googleapis.com/auth/calendar"];

  // Assign the proper Google Auth account based on 'whichGoogleAccountInteger'
  const token = process.env.TOKEN1 || "No Token Found in env file";
  const credentials = process.env.CREDENTIALS1 || "No Token Found in env file";

  // if (calendarInfo.whichGoogleAccountInteger === 2) {
  //   token = process.env.TOKEN2 || "No Token Found in env file";
  //   credentials = process.env.CREDENTIALS2 || "No Token Found in env file";
  // } else if (calendarInfo.whichGoogleAccountInteger === 3) {
  //   token = process.env.TOKEN3 || "No Token Found in env file";
  //   credentials = process.env.CREDENTIALS3 || "No Token Found in env file";
  // } else {
  //   token = process.env.TOKEN1 || "No Token Found in env file";
  //   credentials = process.env.CREDENTIALS1 || "No Token Found in env file";
  // }

  function authorize(credentials, callback) {
    // eslint-disable-next-line camelcase
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      // eslint-disable-next-line camelcase
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  }
  /* eslint-enable */

  authorize(JSON.parse(credentials), insertCalendar);
  //****************************************** Custom Functions After Authorization completed above

  function insertCalendar(auth) {
    logthis(
      "Trying to Create/Insert New Calendar, Named = " + eventData.raceName
    );

    //here we go!
    calendar = google.calendar({ version: "v3", auth });
    calendar.calendars.insert(
      {
        resource: { summary: eventData.raceName }
      },
      function(err, res) {
        if (err) {
          respond(null);
          return console.log("The API returned an error: " + err);
        }
        // var calenderInfo = calendarInfo;

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
        //        respond(calendarInfo.calendarId);
        calendarInfo.etag = res.data.etag;

        shareCalendar(auth, calendarInfo);
        return calendarInfo;
      }
    );
  }

  function shareCalendar(auth, calendarInfo) {
    if (gmailAddress) {
      console.log("Now trying to share Calendar with: " + gmailAddress);
    } else {
      gmailAddress = "perrywilliams@800appliance.com";
      logthis("ERROR: gmailAddress was blank, so using " + gmailAddress);
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
            value: gmailAddress
          },
          role: "writer"
        }
      },
      err => {
        if (err) {
          return console.log("Calendar API failed on calendar#aclRule: " + err);
        }

        logthis(
          "Success sharing Calendar using calendar#aclRule to: " + gmailAddress
        );
        // Now insert the first event:

        insertEvent(auth, events, calendarInfo);
      }
    );
  }

  function insertEvent(auth, events) {
    for (var i = 0; i < events.length; i++) {
      eventDate = new Date(events[i].date + "T12:00:00");
      theDay = eventDate.toString().substring(0, 3);

      // Start of inserting events into calendar
      //****************************************************************  REDUCE Function *************************
      //****************************************************************  REDUCE Function *************************
      console.log("start of reduce strategy");
      // var eventCount = 0;
      // var makeEvents = makeEvents;
      let arrItems = events;
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
    logthis("make this event = ", makeEvent);
    var event = {
      summary: makeEvent.title,
      // 'location': 'Austin, TX',
      description: makeEvent.description,
      start: {
        dateTime: makeEvent.dateTime + "T14:00:00-05:00",
        timeZone: "America/Chicago"
      },
      end: {
        dateTime: makeEvent.dateTime + "T19:00:00-05:00",
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
