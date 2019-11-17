import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Hero from '../components/Hero';
import API from '../utils/API';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], raceName: "", syncEvents: [], calendarRef: "" }
  }

  getPlan = () => {
    API.getPlan().then(result => {
      const events = result.data.events.map(e => ({ title: e.runDistance + " Mile " + e.description.split(" ")[0] + " Run", start: e.dateTime, end: e.dateTime, allDay: true }));
      const raceName = result.data.name;
      const { events: syncEvents, calendarRef  } = result.data;
      syncEvents.forEach(e => e.title = e.runDistance + " Mile " + e.description.split(" ")[0] + " Run");
      this.setState({ events, raceName, syncEvents, calendarRef });
    })
    .catch(() => { // no calendar found, take them to setup
      window.location.href = "/setup"
    });
  }

  componentDidMount() {
    this.getPlan();
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
      .then(function(resultCalendarRef) {
        this.setState({calendarRef: resultCalendarRef});
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
    return (
      <div>
        <Hero heroNameClass="heroCalendar" heroTextClass="heroCalendarText" heroTitle="Calendar" heroText="Nothing worthwhile ever came easy.  This is your training calendar.  Now, it's time to log some miles!"/>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="calendarcontainer">
                <CalendarComponent events={this.state.events} />
              </div>
              <h1>Sync to your Google Calendar</h1>
              <p>Like your plan?  You can sync it to your Google Calendar in one click.  Press the button.  It's that easy.
                <button type="button" onClick={this.syncCalendar} className="btn btn-dark btn-lg btn-block">Sync to Google Calendar</button>
                {this.displayCalendarRef()}
              </p>
            </div> 
          </div>
        </div>
      </div>
  )};
}

export default Calendar;