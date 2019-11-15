import React from 'react';
import '../App.css'
import Hero from '../components/HeroContact';
import Forms from '../components/Forms';
import { CONTACT } from '../utils/consts';

const Contact = () => {
  return (
    <div>
      <Hero />
      <div className="aboutcontainer">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="abouttitle">
              <h2><strong><center>Get in Touch!</center></strong></h2>
            </div>
            <p>We want to hear from you.  Questions about your plan?  Got suggestions?  Want to join our team?  Send us a message and we'll get back to you pronto.</p>
            <Forms formType={CONTACT} ></Forms>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default Contact;