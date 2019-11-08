import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import bgimage from "";

const Hero = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
        <Container fluid>
          <h1 className="display-3">{props.header}</h1>
          <p className="lead">{props.text}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;