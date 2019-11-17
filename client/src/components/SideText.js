import React from 'react';
import {
  CardText, CardBody,
  CardSubtitle
} from 'reactstrap';

const SideText = (props) => {
  return (
    <div>
        <CardBody className="textCard">
          <CardSubtitle className="subtitle">{props.subtitle}</CardSubtitle>
          <CardText className="text">{props.text}</CardText>
        </CardBody>
    </div>
  );
};

export default SideText;