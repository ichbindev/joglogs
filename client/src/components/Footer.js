import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <strong><h3>jog log</h3></strong>
          
          <a class="icon" href="/">
          <i class="fa fa-facebook fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <br />
          <a class="icon" href="/">
          <i class="fa fa-twitter fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <br />
          <a class="icon" href="/">
          <i class="fa fa-instagram fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        </Col>
        <Col>
          <h3>Navigation</h3>
          <a href="/">
            About
          </a>
          
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
          <h3>Helpful Links</h3>
          
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