import React, { Component } from 'react';
import Forms from '../components/Forms';
import { START, GOAL } from '../utils/consts';
import Hero from '../components/Hero';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <Hero/>
      <Forms formType={START}/>
      <Forms formType={GOAL}/>
    </div> );
  }
}
 
export default Setup;