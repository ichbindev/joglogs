import React, { Component } from 'react';
import Forms from '../components/Forms';
import { START, GOAL } from '../utils/consts';
import Hero from '../components/Hero';
import API from '../utils/API';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mpw: 0,
      days: [],
      longRun: "Sunday",
      goalDistance: 3.1,
      raceName: "",
      raceDate: "2020-01-01"
     }
  }

  // Handles the start and goal forms
  handleInputChange = event => {
    // TODO: don't let them choose a long run on a day they're not running
    const { name, value } = event.target;
    // if the changed item is the days they can run...
    if (name === "days") {
      let days = this.state.days;
      // see if the item has been checked or unchecked
      if (!days.includes(value)) {
        // add it to the array (item was checked)
        days.push(value);
      } else {
        // remove it from the array if it's already there (item was unchecked)
        days = days.filter(day => day !== value);
      }
      this.setState({days});
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  handleFormSubmit = event => {
    console.log("about to call API")
    event.preventDefault();
    const calendarData = this.state;
    API.createCalendar(calendarData)
      .then(() => window.location.href="/calendar");
  }

  render() { 
    return ( <div>
      <Hero heroNameClass="heroSetup" heroTextClass="heroSetupText" heroTitle="Setup" heroText="Every runner has different training needs. Fill out your information below. Once you hit submit, we'll
        generate a custom training plan to suit your needs."/>
      <br />
      <div className="container">
        <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <Forms formType={START} onChange={this.handleInputChange}/>
      <br />
      <Forms formType={GOAL} onChange={this.handleInputChange}/>
      <br />
      <div className="text-center">
      
      <button className="btn btn-dark btn-lg btn-block" onClick={this.handleFormSubmit}>Submit</button>
      
      </div>
      <br />
      </div>
      <div className="col-md-2"></div>
      </div>
      </div>
    </div> );
  }
}
 
export default Setup;