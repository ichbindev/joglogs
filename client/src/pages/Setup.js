import React, { Component } from 'react';
import Form from '../components/Form';
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
      <Form formType={START}/>
      <Form formType={GOAL}/>
    </div> );
  }
}
 
export default Setup;