import React from 'react';

const Error = (props) => {
  let text = props.listeningFor;

  // props.errors is a set of current errors
  // props.listeningFor is the type of error that this component is listening for
  
  if (props.errors.has(props.listeningFor)) {
  return ( 
    <Alert color="danger">
        {text}
    </Alert>
   );
  }
}
 
export default Error;