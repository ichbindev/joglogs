import axios from "axios";

export default {
  // Signs a user up
  signUp: function(user) {
    return axios.post("/api/user/signup", user);
  },
  // Logs a user in
  login: function(user) {
    return axios.post("/api/user/login", user);
  },
  // Logs a user out
  logout: function() {
    return axios.post("/api/user/logout");
  },
  // creates a plan
  // TODO: refactor out legacy name
  createCalendar: function(calendarData) {
    console.log("create with", calendarData)
    return axios.post("/api/calendar", calendarData);
  },
  // get the users first plan with hydrated events
  getPlan: function() {
    return axios.get("/api/plans");
  },
  // checks if the user has any plans
  hasPlan: function() {
    return axios.get("/api/plans/check");
  }
};
