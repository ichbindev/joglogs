import React from 'react';

const Hero = (props) => {
  return ( 
    <div>
      Hero {props.header.toString()}
      Body {props.body.toString()}
    </div>
  );
}
 
export default Hero;