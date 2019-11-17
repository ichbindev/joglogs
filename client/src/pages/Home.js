import React from 'react';
import '../App.css'

const Home = () => {
  return (
    <div>
      <div className="videocontainer">
        <video autoPlay muted loop id="myVideo" width="1300">
          <source src="run.mp4" type="video/mp4" />
        </video>
        <div className="overlayText">
          Instant custom training plans that seamlessly sync to your calendar
            </div>
      </div>
      <div className="row">
        <img src="/media/run1.jpg" alt="run1" />
        <div className="textDiv">
          <div className="subtitle"><strong>Custom</strong></div>
          <div className="subtext">"Whether you're going from couch to 5k or looking to set a Personal Record at your 10th marathon, every runner is unique and has different training needs. Jog Log's algorithm creates a custom training plan to suit your fitness level and schedule."</div>
        </div>
      </div>
      <div className="row">
        <div className="textDiv">
          <div className="subtitle"><strong>Instant</strong></div>
          <div className="subtext">"Enter your details are submitted, Jog Log instantly generates a dynamic training plan for your race. Less time waiting, more time running."</div>
        </div>
        <img src="/media/run2.jpg" alt="run2" />
      </div>
      <div className="row">
        <img src="/media/run3.jpg" alt="run3" />
        <div className="textDiv">
          <div className="subtitle"><strong>Easy to Access</strong></div>
          <div className="subtext">"Jog Logs easily syncs your training plan to your calendar so you don't have to go digging through spreadsheets, combing your email, or surfing the web for that training plan you found once."</div>
        </div>
      </div>
    </div>
  );
}

export default Home;