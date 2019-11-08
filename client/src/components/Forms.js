import React, { Component } from 'react';
import { CardTitle, CardBody, CardText } from 'reactstrap';
import { SIGN_UP, LOG_IN, START, GOAL } from '../utils/consts';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  chooseForm(formType) {
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

  render() { 
    <div>
      {chooseForm(this.props.formType)}
    </div>
  };
}
 
export default Form;

const SignUpForm = () => {
  return ( <div>Sign Up</div> );
}
 
export default SignUpForm;

const LogInForm = () => {
  return ( <div>Log In</div> );
}
 
export default LogInForm;

const StartForm = () => {
  return ( <div>Start</div> );
}
 
export default StartForm;

const GoalForm = () => {
  return ( <div>Goal</div> );
}
 
export default GoalForm;