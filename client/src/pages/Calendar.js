import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import API from '../utils/API';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] }
    
  }

  displayCalendar = () => {
    if (this.state.events) {
      return <CalendarComponent events={this.state.events}/>;
    } else {
      return "";
    }
  }

  getPlan = () => {
    API.getPlan().then(result => {
      const events = result.data.events.map(e => ({title: "Run", start: e.dateTime, end: e.dateTime, allDay: true}));
      console.log(events[0]);
      this.setState({ events });
    });
  }

  componentDidMount() {
    this.getPlan();
  }

  render() { 
    return ( <div>
      {/* {this.displayCalendar()} */}
      <CalendarComponent events={this.state.events}/>
      </div>);
  }
}
 
export default Calendar;