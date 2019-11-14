import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import API from '../utils/API';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] }
    
  }

  getPlan = () => {
    API.getPlan().then(result => {
      const events = result.data.events.map(e => ({title: e.runDistance + " Mile " +  e.description.split(" ")[0] + " Run", start: e.dateTime, end: e.dateTime, allDay: true}));
      this.setState({ events });
    });
  }

  componentDidMount() {
    this.getPlan();
  }

  render() { 
    return ( <div>
      <CalendarComponent events={this.state.events}/>
      </div>);
  }
}
 
export default Calendar;