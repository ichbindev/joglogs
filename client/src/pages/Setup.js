import React, { Component } from 'react';
import Forms from '../components/Forms';
import { START, GOAL } from '../utils/consts';
import Hero from '../components/Hero';
import API from '../utils/API';
import { NUM_DAYS_ERROR, LONG_RUN_ERROR, SERVER_ERROR } from '../utils/consts';
import Error from '../components/Error';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mpw: 0,
      days: [],
      longRun: "0",
      goalDistance: 3.1,
      raceName: "",
      raceDate: "2020-01-01",
      errors: new Set()
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
    event.preventDefault();
    const calendarData = this.state;
    if (this.state.days.length < 3 || this.state.days.length > 6) {
      const errors = this.state.errors;
      errors.add(NUM_DAYS_ERROR);
      this.setState({ errors });
    } else if(!this.state.days.includes(this.state.longRun)) {
      const errors = this.state.errors;
      errors.add(LONG_RUN_ERROR);
      this.setState({ errors });
    } else {
      API.createCalendar(calendarData)
      .then(() => window.location.href="/calendar")
      .catch((() => {
        const errors = this.state.errors;
        errors.add(SERVER_ERROR);
        this.setState({ errors });
      }));
    }
  }

  render() { 
    const page = ( <div>
      <Hero heroNameClass="heroSetup" heroTextClass="heroSetupText" heroTitle="Setup" heroText="Every runner has different training needs. Fill out your information below. Once you hit submit, we'll
        generate a custom training plan to suit your needs."/>
      <br />
      <div className="container">
        <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
      <Forms formType={START} onChange={this.handleInputChange}  errors={this.state.errors}/>
      <br />
      <Forms formType={GOAL} onChange={this.handleInputChange} errors={this.state.errors}/>
      <br />
      <div className="text-center">
      
      <button className="btn btn-dark btn-lg btn-block" onClick={this.handleFormSubmit}>Submit</button>
      <Error listeningFor={SERVER_ERROR} errors={this.state.errors} />
      
      </div>
      <br />
      </div>
      <div className="col-md-2"></div>
      </div>
      </div>
    </div> );

    if (this.props.loggedIn) {
      return page;
    } else {
      return <p>Please log in to view this page</p>;
    }
  }
}
 
export default Setup;