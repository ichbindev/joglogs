import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
// import bgimage from "";
// style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}

const Hero = (props) => {
  return (
    <div className="heroSection">
    <div className="heroSectionText">
      <h1>Set Up</h1>
      <h5>Every runner has different training needs. Fill out your information below. Once you hit submit, we'll
        generate a custom training plan to suit your needs.</h5>
    </div>
  </div>
  );
};

export default Hero;