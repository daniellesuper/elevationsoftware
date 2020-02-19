import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
        Elevation Software<br/>
        (678) 923 - 7694<br/>
        <a>info@elevationsoftware.io</a>
        <div id="bar"></div>
        <div id="copy">COPYRIGHT 2020, ELEVATION SOFTWARE SERVICE INC.</div>
      </footer>
    );
  }
}
export default Footer;