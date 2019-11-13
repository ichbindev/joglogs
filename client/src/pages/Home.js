import React from 'react';
import Hero from '../components/Hero';
import SideImage from '../components/SideImage';
import SideText from '../components/SideText';
import '../App.css'

const Home = () => {
  return (
        <div>
          <div class="videocontainer">
            <video autoPlay muted loop id="myVideo" width="1300">
            <source src="run.mp4" type="video/mp4" />
            </video>
            <div class="overlayText">
            Instant custom training plans that seamlessly sync to your calendar
            </div>
          </div>
        <div style={{display:"flex"}}>
          <div style={{width:"50%"}}>
            <SideImage image={"/media/run1.jpg"} />
          </div>
          <div style={{width:"50%"}}>
            <SideText subtitle={"Custom"} text={"Whether you're going from couch to 5k or looking to set a Personal Record at your 10th marathon, every runner is unique and has different training needs. Jog Log's algorithm creates a custom training plan to suit your fitness level and schedule."} />
          </div>
        </div>

        <div style={{display:"flex"}}>
          <div style={{width:"50%"}}>
            <SideText subtitle={"Instant"} text={"Enter your details are submitted, Jog Log instantly generates a dynamic training plan for your race. Less time waiting, more time running."} />
          </div>
          <div style={{width:"50%"}}>
            <SideImage image={"/media/run2.jpg"} />
          </div>
        </div>

        <div style={{display:"flex"}}>
          <div style={{width:"50%"}}>
            <SideImage image={"/media/run3.jpg"} />
          </div>
          <div style={{width:"50%"}}>
            <SideText subtitle={"Easy to Access"} text={"Jog Logs easily syncs your training plan to your calendar so you don't have to go digging through spreadsheets, combing your email, or surfing the web for that training plan you found once."} />
          </div>
        </div>
        </div>
      );
    }
     
export default Home;