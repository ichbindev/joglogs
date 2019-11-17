import React from 'react';

const Button = (props) => {
  return ( 
  <div className="btn" type="button" onClick={props.onClick}>
    {props.children}
  </div> );
}
 
export default Button;