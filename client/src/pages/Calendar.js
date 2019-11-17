import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Hero from '../components/Hero';
import API from '../utils/API';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] }
  }

  getPlan = () => {
    API.getPlan().then(result => {
      const events = result.data.events.map(e => ({ title: e.runDistance + " Mile " + e.description.split(" ")[0] + " Run", start: e.dateTime, end: e.dateTime, allDay: true }));
      this.setState({ events });
    })
    .catch(() => { // no calendar found, take them to setup
      window.location.href = "/setup"
    });
  }

  componentDidMount() {
    this.getPlan();
  }

  checkLogin = () => {
    if (!this.props.loggedIn) {
      window.location.href = "/"
    }
  }

  render() {
    return (
    <div>
      {this.checkLogin()}
      <Hero heroNameClass="heroCalendar" heroTextClass="heroCalendarText" heroTitle="Calendar" heroText="Nothing worthwhile ever came easy.  This is your training calendar.  Now, it's time to log some miles!"/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="calendarcontainer">
              <CalendarComponent events={this.state.events} />
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Calendar;