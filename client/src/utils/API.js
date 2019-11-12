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
  createCalendar: function(calendarData) {
    return axios.post("/api/calendar", calendarData);
  }
};
