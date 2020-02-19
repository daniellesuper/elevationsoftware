import React from 'react';
import './Services.css';
import Image from './Images/code.jpeg';

class Services extends React.Component{
  render(){
    return(
      <div className="slideshow">
        <div className="slogan">
          <h1>Services</h1>
          <h2>
          Custom Software Tailored To Your Needs
          </h2>
        </div>
        <div className="row">
          <div className="box">
            <h4>WEB APPLICATIONS</h4>
            <p>
              We build responsive web applications including eCommerce, logistics, and business intelligence.
            </p>
          </div>
          <div className="box">
            <h4>MOBILE</h4>
            <p>
              We architect iOS and Android solutions from design to app store release.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <h4>IT INFRASTRUCTURE</h4>
            <p>
              We have experience with on-premise solution management include virtualization, networking, and server installation.
            </p>
          </div>
          <div className="box">
            <h4>CLOUD MANAGEMENT</h4>
            <p>
              We can handle your companies application traffic using cloud native solutions including Amazon Web Services (AWS) and Google Cloud Platform.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;