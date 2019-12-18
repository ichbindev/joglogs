import React from 'react';
import '../App.css'
import Hero from '../components/Hero';
import Forms from '../components/Forms';
import { CONTACT } from '../utils/consts';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {
  return (
    <div>
      {/* <ScrollAnimation animateIn="fadeIn"> */}
      <Hero heroNameClass="heroContact" heroTextClass="heroContactText" heroTitle="Contact" heroText="We want to hear from you.  Shoot us a message!"/>
      {/* </ScrollAnimation> */}
      <div className="aboutcontainer">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="abouttitle">
              <h2><strong><center>Get in Touch!</center></strong></h2>
            </div>
            <p>Questions about your plan?  Got suggestions?  Want to join our team?  Send us a message and we'll get back to you pronto.</p>
            <ScrollAnimation animateOnce animateIn="fadeIn">
            <Forms formType={CONTACT} ></Forms>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default Contact;