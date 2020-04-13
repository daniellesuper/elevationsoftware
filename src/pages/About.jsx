import React, { Component } from 'react';
import ImageBar from '../components/ImageBar/ImageBar';

class About extends Component{
  render(){
    return(
      <div className="showcase">
        <div className="slogan">
          <span id="aboutH1"><h1>ELEVATION SOFTWARE</h1></span>
          <h3>
          Custom Software Made for Your Business
          </h3>
        </div>
        <div className="backgroundPanel">
          <div className="container">
            <div className="box">
              <p>WHO ARE WE</p>
              <p>
                Elevation was founded with the idea of providing custom software solutions for clients of all size. Whether you are building a personal blog or an enterprise system, we have the knowledge to create your vision on a budget that matches the project. Our company is dedicated to designing intuitive applications and websites that can scale to countless users.
              </p>
            </div>
            <div className="box">
              <p>WE EXCEL IN</p>
              <ul>
                <li>Web Applications</li>
                <li>Native Mobile Apps</li>
                <li>IT Infrastructure</li>
                <li>Cloud Management & Migrations</li>
              </ul>
            </div>
          </div>
        </div>
        
        <ImageBar />
        <div className="spacer"/>
      </div>
    );
  }
}
export default About;