import React from 'react';
import '../App.css'
import FunnelContent from '../components/FunnelContent';

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
<FunnelContent textFirst={false} subtitle="Custom" subtext="Whether you're going from couch to 5k or looking to PR at your next marathon, every runner is unique and has different training needs. Train Method's algorithm creates a custom training plan to suit your fitness level and schedule." img="/media/run1.jpg" alt="run1"/>
<FunnelContent textFirst={true} subtitle="Instant" subtext="On the set up page, enter your details about your background and your goal.  Once your details are submitted, Train Method instantly generates a dynamic training plan for your race. Less time waiting, more time running." img="/media/run2.jpg" alt="run2"/>
<FunnelContent textFirst={false} subtitle="Easy to Access" subtext="Train Method easily syncs your training plan to your calendar so you don't have to go digging through spreadsheets, combing your email, or surfing the web for that training plan you found once." img="/media/run3.jpg" alt="run3"/>
    </div>
  );
}

export default Home;