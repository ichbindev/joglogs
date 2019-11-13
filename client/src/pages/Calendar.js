import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import API from '../utils/API';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [  {
      title:
        '0.3 mile run today. 17 weeks til Marathon. Recovery Week : ',
      start: '2019-11-13',
      end: '2019-11-13',
      allDay: true
    }] }
    
  }

  getPlan = () => {
    API.getPlan().then(plan => {
      console.log(plan.data.events.length)
      this.setState({ events: plan.data.events });
    });
  }

  componentDidMount() {
    console.log("cdm")
    this.getPlan();
  }

  render() { 
    return ( <div>
      <CalendarComponent events={this.state.events}/>
      </div>);
  }
}
 
export default Calendar;