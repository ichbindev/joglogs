import React, { Component } from 'react';
import '../App.css'
import CalendarComponent from '../components/CalendarComponent';
import Hero from '../components/Hero';
import API from '../utils/API';
import ScrollAnimation from 'react-animate-on-scroll';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], raceName: "", syncEvents: [], calendarRef: "" }
  }

  getPlan = () => {
    API.getPlan().then(result => {
      const events = result.data.events.map(e => ({ title: e.runDistance + " Mile " + e.description.split(" ")[0] + " Run", start: e.dateTime + "T12:00:00", end: e.dateTime + "T13:00:00", allDay: false }));
      const raceName = result.data.name;
      const { events: syncEvents, calendarRef } = result.data;
      syncEvents.forEach(e => e.title = e.runDistance + " Mile " + e.description.split(" ")[0] + " Run");
      this.setState({ events, raceName, syncEvents, calendarRef });
    })
      .catch(() => { // no calendar found, take them to setup
        window.location.href = "/setup"
      });
  }

  // for some reason we're shifting all the dates by 1
  // add one to the date
  fixDate(date) {
    date = date.split("-");
    date[2] = parseInt(date[2]) + 1;
    console.log(date);
    return date.join("-");
  }

  componentDidMount() {
    this.getPlan();
  }

  checkLogin = () => {
    if (!this.props.loggedIn) {
      window.location.href = "/"
    }
  }

  syncCalendar = () => {
    const { raceName, syncEvents, calendarRef } = this.state;
    // convert sync events to what perry wants
    // check events above, if that works then just use those
    if (!this.state.calendarRef) {
      const calendarInfo = {
        raceName,
        events: syncEvents,
        calendarRef
      }
      API.syncCalendar(calendarInfo)
        .then(function (resultCalendarRef) {
          this.setState({ calendarRef: resultCalendarRef });
          this.displayCalendarRef();
        });
    }
  }

  displayCalendarRef = () => {
    if (this.state.calendarRef) {
      return <p>{this.state.calendarRef}</p>
    }
    return;
  }

  render() {
    const page = (
      <div>
        <Hero heroNameClass="heroCalendar" heroTextClass="heroCalendarText" heroTitle="Calendar" heroText="Nothing worthwhile ever came easy.  This is your training calendar.  Now, it's time to log some miles!" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="calendarcontainer">
                <CalendarComponent events={this.state.events} />
              </div>
            </div>
          </div>
          <div className="synccontainer">
            <div className="row">
              <div className="col-md-12">
              <ScrollAnimation animateIn="flipInX">
                <div className="card">
                  <div className="card-header">
                    <h1>Sync to your Google Calendar</h1>
                  </div>
                  <div className="card-body">
                    <p>Like your plan?  You can sync it to your Google Calendar in just a few clicks.  Press the button below and we'll send you an email with a link to add your training program to your Google Calendar.  Once you open the email, click "Add this calendar" to sync to your Google Calendar or click "View Your Calendar" to preview the Google Calendar.  It's that easy. </p>
                    <button type="button" onClick={this.syncCalendar} className="btn btn-dark btn-lg btn-block">Send me a Google Calendar link</button>
                    {this.displayCalendarRef()}
                  </div>
                </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    if (this.props.loggedIn) {
      return page;
    } else {
      return <p>Please log in to view this page</p>;
    }
  };


}

export default Calendar;