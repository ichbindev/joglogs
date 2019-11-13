import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <CalendarComponent events={""}/>
    </div> );
  }
}
 
export default Calendar;