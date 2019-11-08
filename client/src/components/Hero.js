import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
// import bgimage from "";
// style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}

const Hero = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.header}</h1>
          <p className="lead">{props.text}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;