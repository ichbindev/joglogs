import React from 'react';
import { Card } from 'reactstrap';

const Cardify = (props) => {
  return (
    <div>
      <Card>
        {props.children}
      </Card> 
    </div>
   );
}
 
export default Cardify;