import React from 'react';
import '../App.css'
import Hero from '../components/Hero3';

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
            <p>Jog Logs was born out of necessity. While training for the 2019 New York City Marathon, Jog Logs founder
              Aaron Phillips was looking for a training plan but was frustrated with what he found. After rebounding from an
          injury, he had a unique goal: go from couch to marathon in 8 months. </p>
            <p>There are plenty of one-size-fits-all
              marathon training plans available online but they don't take into account the runner's fitness and are only
              available as static spreadsheets. The alternative was to seek a training coach to write a custom plan but this
          was a far more expensive option and still only yielded a static spreadsheet.</p>
            <p>The idea for jog logs started to form over the course of a long run. It turns out, many in the running
              community weren't happy with their options when it comes to training plans. After fielding input from the
              running community, it became very clear that runners need dynamic training plans that are customized to their
          unique needs and are easy to access. </p>
            <p>The entire race training market was in serious need of technological
          innovation. With this in mind, jog logs started to take shape.</p>
          


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