import React from 'react';
import '../App.css'
import Hero from '../components/HeroAbout';

const About = () => {
  return (
    <div>
      <Hero />
      <div className="aboutcontainer">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="abouttitle">
            <h2><strong><center>It will invade your life. It will haunt your dreams. It will control you. Say YES to running.</center></strong></h2>
            </div>
            <p>There are plenty of one-size-fits-all
              marathon training plans available online but they don't take into account the runner's fitness and are only
              available as static spreadsheets. The alternative is to seek a training coach to write a custom plan but this
          is a far more expensive option and still only yielded a static spreadsheet.</p>
            <p>Runners need dynamic training plans that are customized to their
          unique needs and are easy to access. The entire race training market was in serious need of technological
          innovation. With this in mind, Training Method started to take shape.</p>
          


          <h2><strong><center>Get in Touch</center></strong></h2>
          <p>We want to hear from you. Feel free to send us a message</p>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default About;