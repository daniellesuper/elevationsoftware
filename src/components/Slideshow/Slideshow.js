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
      </div>
    );
  }
}

export default Slideshow;