module.exports = createGoogleCalendar;
require("dotenv").config();
let respond;

showLogs = true; //true = shows lots of console log stuff, false shows "ERROR containing messages only"
function logthis(stuff) {
  if (showLogs || stuff.includes("ERROR")) {
    console.log(stuff);
  }
}
