import React from 'react';
import { Alert } from 'reactstrap';

const Error = (props) => {
  let text = props.listeningFor;

  // props.errors is a set of current errors
  // props.listeningFor is the type of error that this component is listening for
  
  if (props.errors.has(props.listeningFor)) {
  return ( 
    <Alert color="danger" style={{display: "block"}}>
        {text}
    </Alert>
   );
  }
  return "";
}
 
export default Error;