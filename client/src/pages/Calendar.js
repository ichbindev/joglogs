import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Hero from '../components/HeroCalendar';
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
    });
  }

  componentDidMount() {
    this.getPlan();
  }

  render() {
    return (
    <div>
      <Hero />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="calendarcontainer">
              <CalendarComponent events={this.state.events} />
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Calendar;