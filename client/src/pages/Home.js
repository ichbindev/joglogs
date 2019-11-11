import React from 'react';
import Hero from '../components/Hero';
import SideImage from '../components/SideImage';
import SideText from '../components/SideText';

const Home = () => {
  return ( 
    <div>
      <Hero/>
      <SideImage image={"https://via.placeholder.com/300"} />
      <SideText subtitle={"SAMPLE SUBTITLE"} text={"SAMPLE TEXT"} />
    </div>
  );
}
 
export default Home;