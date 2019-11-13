import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <footer id="sticky-footer" class="py-4 text-white">
    <Container>
    
      
        <div id="footersection">
      <Row>
        <Col>
        <div class="footerLogo">
          <strong>jog log</strong>
        </div>
        <br />
          <a class="icon" href="/">
          <i class="fa fa-facebook fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a class="icon" href="/">
          <i class="fa fa-twitter fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a class="icon" href="/">
          <i class="fa fa-instagram fa-md white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        </Col>
        <Col>
        <br />
          <h3>Navigation</h3>
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
        <div class="container text-center text-white-50">
        <div class="row">
          <div class="col-md-12">
          <small>Copyright &copy; 2019 Jog Log</small>
          </div>
          </div>
          </div>
          <br />
        </Col>
      </Row>
      </div>
      
      
    </Container>
    </footer>
  );
}

export default Footer;