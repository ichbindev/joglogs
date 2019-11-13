import React from 'react';
import {
  Card, CardText, CardBody,
  CardSubtitle
} from 'reactstrap';

const SideText = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default SideText;