import React, { Component } from 'react';
import Image from '../images/desk2.jpg';

class Contact extends React.Component{
  render(){
    return(
      <div className="showcase">
        <img src={Image} alt="Elevation Software" />
        <div className="slogan">
          <h1>Contact Us</h1>
          <h3>
            Developing Software that Takes Your Business to the Next Level
          </h3>
        </div>

        <div className="container">
          <div className="box2">
            <h4>QUESTIONS?</h4>
            <p>
              Curious about the impact a new system could have on your business? Are you interested in a new website but don't know where to start? Call, message or email us and we will provide solutions for your problems!
            </p>
          </div>
        </div>
        <div className="spacer" />
        <div id="formBox">
          <h3>Send Us A Message</h3>
          <form>
            Name<input type="text" name="name"/><br/>
            Email<input type="text" name="email"/><br/>
            Message<textarea type="text" placeholder="What can we help you with?" name="message"/><br/>
            Phone #<input type="text" placeholder="(XXX) XXX-XXXX" name="phoneNum"/><br/>
            <button id="submitButton" type="submit">Submit</button>
          </form>
          <div className="spacer" />
        </div>
        
      </div>
    );
  }
}
export default Contact;