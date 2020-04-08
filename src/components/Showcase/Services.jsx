import React, { Component } from 'react';
import Icon1 from '../../images/laptop.png';
import Icon2 from '../../images/finger-touching-tablet-screen.png';
import Icon3 from '../../images/computer.png';
import Icon4 from '../../images/cloud.png';

class Services extends Component{
  render(){
    return(
      <div className="backgroundPanel">
        <div className="showcase">
          <div className="slogan">
            <h1>Services</h1>
            <h3>
            Custom Software Tailored To Your Needs
            </h3>
          </div>
          <div className="container">
            <div className="box2">
              <img id="icon" src={Icon1} alt="Elevation Software"/>
              <h4>WEB APPLICATIONS</h4>
              <p>
                We build responsive web applications including eCommerce, logistics, and business intelligence.
              </p>
            </div>
            <div className="box2">
              <img id="icon" src={Icon2} alt="Elevation Software"/>
              <h4>MOBILE</h4>
              <p>
                We architect iOS and Android solutions from design to app store release.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="box2">
              <img id="icon" src={Icon3} alt="Elevation Software"/>
              <h4>IT INFRASTRUCTURE</h4>
              <p>
                We have experience with on-premise solution management include virtualization, networking, and server installation.
              </p>
            </div>
            <div className="box2">
              <img id="icon" src={Icon4} alt="Elevation Software"/>
              <h4>CLOUD MANAGEMENT</h4>
              <p>
                We can handle your companies application traffic using cloud native solutions including Amazon Web Services (AWS) and Google Cloud Platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;