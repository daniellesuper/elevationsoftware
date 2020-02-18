import React from 'react';
import './Slideshow.css';
import Image from './atlanta.jpeg';


class Slideshow extends React.Component{
  render(){
    return(
      <div className="slideshow">
        <img src={Image} alt="Elevation Software"/>
        <p>
          Placeholder
        </p>
        <div className="showcase">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </div>
      </div>
    );
  }
}

export default Slideshow;