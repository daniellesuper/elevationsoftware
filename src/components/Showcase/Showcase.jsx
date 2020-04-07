import React from 'react';
import Image from '../../images/computerscreen.png';
import Services from './Services.jsx';
import Carousel from './Carousel.jsx';



class Showcase extends React.Component{
  render(){
    return(
      <div className="showcase">
        <Carousel />
        <div className="animated-title">
          <div className="text-top">
            <div id="">
              <span>WE'RE ELEVATION</span>
              <span id="subHeading">Developing Software that Takes Your Business to the Next Level</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>
              Elevation is a development agency that excels at providing the right software solutions to our clients.
            </div>
          </div>
        </div>
        <div className="container">
          <div className="box">
            <h4>WHO ARE WE</h4>
            <p>
              Elevation was founded with the idea of providing custom software solutions for clients of all size. Whether you are building a personal blog or an enterprise system, we have the knowledge to create your vision on a budget that matches the project. Our company is dedicated to designing intuitive applications and websites that can scale to countless users.
            </p>
          </div>
          <div className="box">
            <h4>WE EXCEL IN</h4>
            <ul>
              <li>Web Applications</li>
              <li>Native Mobile Apps</li>
              <li>IT Infrastructure</li>
              <li>Cloud Management & Migrations</li><br /><br />
            </ul>
            <img id="boxImage" src={Image} alt="Elevation Software"/>
          </div>
        </div>
        <br/><br/><br/>
        <Services />
      </div>
    );
  }
}

export default Showcase;