import React from 'react';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
        ELEVATION SOFTWARE<br/>
        <b>(678) 923-7694</b><br/>
        <a>INFO@ELEVATIONSOFTWARE.IO</a>
        <div id="bar"></div>
        <div id="copy">COPYRIGHT © 2020<br /> ELEVATION SOFTWARE SERVICE INC.</div>
      </footer>
    );
  }
}
export default Footer;