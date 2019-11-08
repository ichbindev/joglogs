import React, { Component } from 'react';
import Form from '../components/Form';
import { SIGN_UP } from '../utils/consts';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <Form formType={SIGN_UP}/>
    </div> );
  }
}
 
export default Setup;