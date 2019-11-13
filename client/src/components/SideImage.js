import React from 'react';
import {
  CardImg
} from 'reactstrap';

const SideImage = (props) => {
  return (
    <div>
      <CardImg className="sideImage" src={props.image} />
    </div>
  );
};

export default SideImage;