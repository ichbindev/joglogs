import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { SIGN_UP, LOG_IN, START, GOAL } from '../utils/consts';

class Form extends Component {

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
 
export default Form;

const SignUpForm = () => {
  return ( <div><CardTitle>Sign Up</CardTitle><CardBody>I'm a body</CardBody> </div>);
}
 

const LogInForm = () => {
  return ( <div>Log In</div> );
}
 

const StartForm = () => {
  return ( <div>Start</div> );
}
 

const GoalForm = () => {
  return ( <div>Goal</div> );
}
 