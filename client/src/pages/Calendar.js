import React, { Component } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import API from '../utils/API';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] }
    
  }

  getPlan = () => {
    API.getPlan().then(function(response) {
      console.log("****** RESPONSE *******" , response);
      // this.setState({ events: plan.events });
    });
  }

  componentDidMount() {
    this.getPlan();
  }

  render() { 
    return ( <div>
      <CalendarComponent events={this.state.events}/>
    </div> );
  }
}
 
export default Calendar;