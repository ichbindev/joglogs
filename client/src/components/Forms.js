import React, { Component } from 'react';
import { Card, CardTitle, CardBody, Input, Form as RSForm, FormGroup, Label } from 'reactstrap';
import { SIGN_UP, LOG_IN, START, GOAL } from '../utils/consts';

class Forms extends Component {

  chooseForm = (formType) => {
    switch (formType) {
      case SIGN_UP:
        return <SignUpForm/>
      case LOG_IN:
        return <LogInForm/>
      case START:
        return <StartForm/>
      case GOAL:
        return <GoalForm/>
      default:
        return (
          <div>
            <CardTitle>Error</CardTitle>
            <CardBody>There was an issue, please try again.</CardBody>
          </div>
        );
    }
  }

  render() { return(
      <div>
        <Card>        
          {this.chooseForm(this.props.formType)}
        </Card>
      </div>
    );
  };
}
 
export default Forms;

const SignUpForm = () => {
  return ( 
    <div>
      <CardTitle id="sign-up-title">Sign Up</CardTitle>
      <CardBody id="sign-up-body">
        <RSForm>
          <FormGroup>
            <Label htmlFor="signupEmail">Email</Label>
            <Input type="email" name="signupEmail" id="signup-email" placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="signup-password">Password</Label>
            <Input type="password" name="signupPassword" id="signupPassword" placeholder="Password" />
          </FormGroup>
        </RSForm>
      </CardBody> 
    </div>
  );
}
 

const LogInForm = () => {
  return ( 
    <div>
      <CardTitle id="login-title">Login</CardTitle>
      <CardBody id="login-body">
        <RSForm>
          <FormGroup>
            <Label htmlFor="loginEmail">Email</Label>
            <Input type="email" name="loginEmail" id="login-email" placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="login-password">Password</Label>
            <Input type="password" name="loginPassword" id="loginPassword" placeholder="Password" />
          </FormGroup>
        </RSForm>
      </CardBody> 
    </div>
  );
}
 

const StartForm = () => {
  return ( 
    <div>
      <CardTitle id="start-title">Your Information</CardTitle>
      <CardBody id="start-body">
        <RSForm>
          <FormGroup>
            <h3>Current Fitness Level:</h3>
            <Label htmlFor="mpw">How many Miles Per Week (MPW) do you currently
                  run?</Label>
            <Input type="select" name="mpw">
              <option value="0">0</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70+</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <h3>Your Schedule:</h3>
            <legend>What days of the week are you able to run?</legend>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Sunday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Monday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Tuesday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Wednesday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Thursday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Friday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Saturday
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <h3>Long Run:</h3>
            <Label htmlFor="days-of-week">Which day of the week would you like to do your long run?</Label>
            <Input type="select" name="days-of-week">
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </Input>
          </FormGroup>
        </RSForm>
      </CardBody> 
    </div>
  );
}
 

const GoalForm = () => {
  return ( 
    <div>
      <CardTitle id="goal-title">Your Goals</CardTitle>
      <CardBody id="goal-body">
        <RSForm>
          <FormGroup>
            <h3>Goal Distance:</h3>
            <Label htmlFor="goalDistance">What is your goal distance?</Label>
            <Input type="select" name="goalDistance" id="goalDistance">
              <option value="3.1">5k (3.1 Miles)</option>
              <option value="6.2">10k (6.2 Miles)</option>
              <option value="13.1">Half Marathons (13.1 mile)</option>
              <option value="26.2">Marathon (26.2 miles)</option> 
            </Input>
          </FormGroup>
          <FormGroup>
            <h3>Race Name:</h3>
            <label htmlFor="raceName">What is the name of your race?</label><br/>
            <input type="text" name="raceName" id="raceName" placeholder="Austin Marathon"/>
          </FormGroup>
          <FormGroup>
            <h3>Race Date:</h3>
            <label htmlFor="raceDate">What is the date of your race?</label><br/>
            <input type="date" name="raceDate" id="raceDate"/>
          </FormGroup>
        </RSForm>
      </CardBody> 
    </div>
  );
}
 