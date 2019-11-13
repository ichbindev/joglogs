import React, { Component } from 'react';
import { Card, CardTitle, CardBody, Input, Form, FormGroup, Label } from 'reactstrap';
import { SIGN_UP, LOG_IN, START, GOAL } from '../utils/consts';
import Button from './Button';

class Forms extends Component {

  chooseForm = (props) => {
    switch (props.formType) {
      case SIGN_UP:
        return <SignUpForm onClick={props.onClick} onChange={props.onChange} emailValue={props.emailValue} passwordValue={props.passwordValue}/>
      case LOG_IN:
        return <LogInForm onClick={props.onClick} onChange={props.onChange} emailValue={props.emailValue} passwordValue={props.passwordValue}/>
      case START:
        return <StartForm onChange={props.onChange}/>
      case GOAL:
        return <GoalForm onChange={props.onChange}/>
      default:
        return (
          <div>
            <CardBody>There was an issue, please try again.</CardBody>
          </div>
        );
    }
  }

  render() { return(
      <div>
        <Card>        
          {this.chooseForm(this.props)}
        </Card>
      </div>
    );
  };
}
 
export default Forms;

const SignUpForm = (props) => {
  return ( 
    <div>
      <CardBody id="sign-up-body">
        <Form>
          <FormGroup>
            <Label htmlFor="signupEmail">Email</Label>
            <Input type="email" name="signupEmail" id="signup-email" onChange={props.onChange} value={props.emailValue} placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="signup-password">Password</Label>
            <Input type="password" name="signupPassword" id="signupPassword" onChange={props.onChange} value={props.passwordValue} placeholder="Password" />
          </FormGroup>
        </Form>
        <Button onClick={props.onClick}>Sign Up</Button>
      </CardBody> 
    </div>
  );
}
 

const LogInForm = (props) => {
  return ( 
    <div>
      <CardBody id="login-body">
        <Form>
          <FormGroup>
            <Label htmlFor="loginEmail">Email</Label>
            <Input type="email" name="loginEmail" id="login-email" onChange={props.onChange} value={props.emailValue} placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="login-password">Password</Label>
            <Input type="password" name="loginPassword" id="loginPassword" onChange={props.onChange} value={props.passwordValue} placeholder="Password" />
          </FormGroup>
        </Form>
        <Button onClick={props.onClick}>Login</Button>
      </CardBody> 
    </div>
  );
}
 

const StartForm = (props) => {
  return ( 
    <div>
      <CardTitle id="start-title">Your Information</CardTitle>
      <CardBody id="start-body">
        <Form>
          <FormGroup>
            <h3>Current Fitness Level:</h3>
            <Label htmlFor="mpw">How many Miles Per Week (MPW) do you currently
                  run?</Label>
            <Input  onChange={props.onChange} type="select" name="mpw">
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
                <Input  onChange={props.onChange} type="checkbox" name="days" value="Sunday"/>{' '}
                Sunday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input  onChange={props.onChange} type="checkbox" name="days" value="Monday" />{' '}
                Monday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input  onChange={props.onChange} type="checkbox"  name="days" value="Tuesday"/>{' '}
                Tuesday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input  onChange={props.onChange} type="checkbox"  name="days" value="Wednesday"/>{' '}
                Wednesday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input  onChange={props.onChange} type="checkbox"  name="days" value="Thursday"/>{' '}
                Thursday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input  onChange={props.onChange} type="checkbox"  name="days" value="Friday"/>{' '}
                Friday
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input  onChange={props.onChange} type="checkbox"  name="days" value="Saturday"/>{' '}
                Saturday
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <h3>Long Run:</h3>
            <Label htmlFor="days-of-week">Which day of the week would you like to do your long run?</Label>
            <Input  onChange={props.onChange} type="select" name="longRun">
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </Input>
          </FormGroup>
        </Form>
      </CardBody> 
    </div>
  );
}
 

const GoalForm = (props) => {
  return ( 
    <div>
      <CardTitle id="goal-title">Your Goals</CardTitle>
      <CardBody id="goal-body">
        <Form>
          <FormGroup>
            <h3>Goal Distance:</h3>
            <Label htmlFor="goalDistance">What is your goal distance?</Label>
            <Input  onChange={props.onChange} type="select" name="goalDistance" id="goalDistance">
              <option value="3.1">5k (3.1 Miles)</option>
              <option value="6.2">10k (6.2 Miles)</option>
              <option value="13.1">Half Marathons (13.1 mile)</option>
              <option value="26.2">Marathon (26.2 miles)</option> 
            </Input>
          </FormGroup>
          <FormGroup>
            <h3>Race Name:</h3>
            <label htmlFor="raceName">What is the name of your race?</label><br/>
            <Input  onChange={props.onChange} type="text" name="raceName" id="raceName" placeholder="Austin Marathon"/>
          </FormGroup>
          <FormGroup>
            <h3>Race Date:</h3>
            <label htmlFor="raceDate">What is the date of your race?</label><br/>
            <Input  onChange={props.onChange} type="date" name="raceDate" id="raceDate"/>
          </FormGroup>
        </Form>
      </CardBody> 
    </div>
  );
}
 