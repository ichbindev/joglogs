import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <strong><h1>jog log</h1></strong>
          <br />
          <a href="/">
            facebook
          </a>
          <br />
          <a href="/">
            twitter
          </a>
          <br />
          <a href="/">
            instagram
          </a>
        </Col>
        <Col>
          <br />
          <h3>Navigation</h3>
          <br />
          <a href="/">
            About
          </a>
          <br />
          <a href="/">
            Blog
          </a>
          <br />
          <a href="/">
            JLRC
          </a>
          <br />
          <a href="/">
            Jobs
          </a>
        </Col>
        <Col>
          <br />
          <h3>Helpful Links</h3>
          <br />
          <a href="/">
            Privacy
          </a>
          <br />
          <a href="/">
            Terms
          </a>
          <br />
          <a href="/">
            Support
          </a>
          <br />
          <a href="/">
            Contact
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>Copyright &copy; 2019 Jog Log</small>
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;