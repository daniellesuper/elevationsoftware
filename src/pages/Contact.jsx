import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Image from '../images/desk2.jpg';
// import Logo from '../images/elevation1.png';
import X from '../images/close.png';

ReactModal.setAppElement('#root');

class Contact extends Component{
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render(){
    return(
      <div className="showcase">
        <script data-cfasync="false" type="text/javascript" src="form-submission-handler.js"></script>
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
        <div id="formBox" className="backgroundPanel">
          <h3>Send Us A Message</h3>
          <span id="required">* indicates required</span>
          <form method="POST" action="https://script.google.com/macros/s/AKfycbx2tWJWrX00WWCYnixSKLt48BadkhpskBonugISIA/exec" className="gform"
          onReset={this.handleOpenModal}>
            Name<span id="required"> *</span>
              <input type="text" name="name" required/>
            Email<span id="required"> *</span>
              <input type="email" name="email" required/>
            Message<span id="required"> *</span>
              <textarea 
                type="text" 
                placeholder="What can we help you with?" 
                name="message" 
                required
              />
            Phone #
              <input 
                type="tel"
                maxLength="12" 
                placeholder="XXX-XXX-XXXX" 
                name="phoneNumber"
              />
            <button 
              id="submitButton" 
              type="submit" 
              >
                Submit
            </button>

            <ReactModal 
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example"
              onRequestClose={this.handleCloseModal}
              className="Modal"
            >
              <button onClick={this.handleCloseModal}>
                <img src={X} style={{width: '20px'}} alt="Close"/>
              </button>
              <h1>Message sent successfully!</h1>
              <div id="bar"/>
              <h3>We will be in contact soon!</h3>              
            </ReactModal>
          </form>
          <div className="spacer" />
        </div>
      </div>
    );
  }
}
// const props = {};
export default Contact;