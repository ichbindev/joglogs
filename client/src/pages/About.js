import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  return (
    <div>
      {/* <ScrollAnimation animateIn="fadeIn"> */}
      <Hero heroNameClass="heroAbout" heroTextClass="heroAboutText" heroTitle="About" heroText="Learn more about our mission and our team." />
      {/* </ScrollAnimation> */}
      <div className="aboutcontainer">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="abouttitle">
            <ScrollAnimation animateIn="fadeIn">
              <h2><strong><center><q>Only those who risk going too far, can possibly find out how far one can go.</q><br /><cite>-T.S. Elliot</cite></center></strong></h2>
              </ScrollAnimation>
            </div>
            <p>Train Method was born out necessity.  It all started with a lofty goal: going from couch to marathon in 7 months.  </p>
            <p>There are plenty of one-size-fits-all
              marathon training plans available online but they don't take into account the runner's fitness and are only
              available as static spreadsheets. The alternative is to seek a training coach to write a custom plan but this
          is a far more expensive option and still only yielded a static spreadsheet.</p>
            <p>Runners need dynamic training plans that are customized to their
          unique needs and are easy to access. The entire race training market was in serious need of technological
          innovation. With this in mind, Training Method started to take shape.</p>
            <h2><strong><center>Get in Touch</center></strong></h2>
            <p>We want to hear from you. Feel free to <a id="signupmodaltext" href="/contact">send us a message</a> and we'll get back to you pronto.  </p>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default About;