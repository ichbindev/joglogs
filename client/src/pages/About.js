import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  return (
    <div>
      {/* <ScrollAnimation offset="10" animateOnce animateIn="fadeIn"> */}
      <Hero heroNameClass="heroAbout" heroTextClass="heroAboutText" heroTitle="About" heroText="Learn more about our mission and our team." />
      {/* </ScrollAnimation> */}
      <div className="aboutcontainer">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <ScrollAnimation offset="50" animateOnce animateIn="fadeIn">
            <div className="abouttitle">
            
              <h2><strong><center><q>Only those who risk going too far, can possibly find out how far one can go.</q><br /><cite>-T.S. Elliot</cite></center></strong></h2>
             
            </div>
            </ScrollAnimation>
            <ScrollAnimation offset="10" animateOnce animateIn="fadeIn">
            <p>Whether we’re Turkey Trottin’ or PR’ing at a World’s Major, we all share a passion for running.</p>
            <p>No wonder the idea for Train Method originated from a weekend ritual: the long run.  The long run is a time to reflect on where we are today and where we want to be in the future.  As runners, we’re united in the pursuit of setting big goals and devising systematic approaches to achieving those goals.</p>
            <p>While logging miles in the Texas Hill Country and discussing training plans, it became very clear that there was a method behind every training plan but that each runner has their own unique training needs and goals.</p>
            <p>Recognizing that ALL runners deserve custom training plans that are easily accessible and even easier to read, the idea for Train Method was born!</p>
            <p>Now, we’ve set out on a mission to democratize custom training plans and become the go-to source of training plans for all goal-minded runners.</p>
            <p>Let’s log some miles!</p>
            <p>Team Train Method</p>
            <h2><strong><center>Get in Touch</center></strong></h2>
            <p>We want to hear from you. Feel free to <a id="signupmodaltext" href="/contact">send us a message</a> and we'll get back to you pronto.  </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default About;