import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <strong><h1>jog log</h1></strong>
          <br/>
          <a>
            facebook
          </a>
          <br/>
          <a>
            twitter
          </a>
          <br/>
          <a>
            instagram
          </a>
        </Col>
        <Col>
          <br/>
          <h3>Navigation</h3>
          <br/>
          <a>
            About
          </a>
          <br/>
          <a>
            Blog
          </a>
          <br/>
          <a>
            JLRC
          </a>
          <br/>
          <a>
            Jobs
          </a>
        </Col>
        <Col>
          <br/>
          <h3>Helpful Links</h3>
          <br/>
          <a>
            Privacy
          </a>
          <br/>
          <a>
            Terms
          </a>
          <br/>
          <a>
            Support
          </a>
          <br/>
          <a>
            Contact
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>Copyright &copy; 2019 Jog Log</small>
          <br/>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;