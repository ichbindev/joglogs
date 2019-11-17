import React from 'react';
// import bgimage from "";
// style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}

const Hero = (props) => {
  return (
      <div className={props.heroNameClass}>
      <div className={props.heroTextClass}>
      <h1>{props.heroTitle}</h1>
      <h5>{props.heroText}</h5>
    </div>
  </div>
  );
};

export default Hero;