import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


const FunnelContent = (props) => {

  const renderContent = textFirst => {
    

    const image = <img src={props.img} alt={props.alt} />;
    const text = (
      <div className="textDiv">
        <ScrollAnimation offset="10" animateOnce animateIn="slideInRight faster">
        <div className="subtitle"><strong>{props.subtitle}</strong></div>
        <div className="subtext">{props.subtext}</div>
        </ScrollAnimation>
      </div>);
    const text2 = (
      <div className="textDiv">
        <ScrollAnimation offset="10" animateOnce animateIn="slideInLeft faster">
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
        {image}
        {text2}
      </div>);
  }

  return renderContent(props.textFirst);
}

export default FunnelContent;