import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const FunnelContent = (props) => {

  const renderContent = textFirst => {
    

    const image = <img src={props.img} alt={props.alt} />;
    const text = (
      <div className="textDiv">
        <ScrollAnimation animateIn="slideInRight faster">
        <div className="subtitle"><strong>{props.subtitle}</strong></div>
        <div className="subtext">{props.subtext}</div>
        </ScrollAnimation>
      </div>);

    // textFirst is a boolean that determines whether the text is displayed first or second
    if (!textFirst) {
      return (
        <div className="rowName">
          {image}
          {text}
        </div>);
    }

    return (
      <div className="rowName">
        {text}
        {image}
      </div>);
  }

  return renderContent(props.textFirst);
}

export default FunnelContent;