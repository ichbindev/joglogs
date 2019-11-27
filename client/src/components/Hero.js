import React from 'react';
// import bgimage from "";
// style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}
// import ScrollAnimation from 'react-animate-on-scroll';

const Hero = (props) => {
  return (
    <div className={props.heroNameClass}>
      <div className={props.heroTextClass}>
        <h1>{props.heroTitle}</h1>
        <div className="herosubtext">
          <h5>{props.heroText}</h5>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;