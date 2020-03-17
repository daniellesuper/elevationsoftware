import React, { Component } from 'react';
import ImgLeft from '../images/team2.jpg';
import ImgCenter from '../images/data.jpg';
import ImgRight from '../images/service.jpg';

class ImageBar extends React.Component {
  render(){
    return(
      <div id="imageBar">
          <div className="image">
            <img src={ImgLeft} alt="Elevation Software" />
            <h1>Supportive</h1>
            <h3>Advanced technical support</h3>
          </div>
          <div className="image">
            <img src={ImgCenter} alt="Elevation Software" />
            <h1>Knowledgable</h1>
            <h3>Years of Experience</h3>
          </div>
          <div className="image">
            <img src={ImgRight} alt="Elevation Software" />
            <h1>Professional</h1>
            <h3>Clear upfront pricing</h3>
          </div>
        </div>
    );
  }
}       
export default ImageBar; 