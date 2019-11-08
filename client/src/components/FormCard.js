import React from 'react';
import { Card } from 'react-strap';
import Form from 'Form';
const FormCard = (props) => {
  return (
    <div>
      <Card>
        <Form type={props.formType}></Form>
      </Card> 
    </div>
   );
}
 
export default FormCard;