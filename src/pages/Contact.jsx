import React, { Component } from 'react';
//import Image from './atlanta.jpeg';

class Contact extends React.Component{
  render(){
    return(
      <div className="showcase">
        <div className="slogan">
          <h1>Contact Us</h1>
          <h3>
            Developing Software that Takes Your Business to the Next Level
          </h3>
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
              <li>Cloud Management & Migrations</li>
            </ul>
          </div>
        </div>
        <div id="formBox">
          <h3>Send Us A Message</h3>
          <form>
            Name<input type="text" name="name"/><br/>
            Email<input type="text" name="email"/><br/>
            Message<textarea type="text" placeholder="What can we help you with?" name="message"/><br/>
            Phone #<input type="text" placeholder="(XXX) XXX-XXXX" name="phoneNum"/><br/>
            <button id="submitButton" type="submit">Submit</button>
          </form><br/><br/>
        </div>
        
      </div>
    );
  }
}
export default Contact;