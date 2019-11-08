import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events = [] }
  }
  render() { 
    return ( <div>Calendar</div> );
  }
}
 
export default Calendar;