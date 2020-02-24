import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route, Switch, Link, Redirect}
from "react-router-dom"

//import { css } from "@emotion/core";
//import ClipLoader from "react-spinners/ClipLoader";

import Toolbar from './components/Toolbar/Toolbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx';
import Footer from './components/Footer/Footer.jsx';
import Slideshow from './components/Slideshow/Slideshow.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
//import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
    <Router>
      <Toolbar drawerClickHandler=
          {this.drawerToggleClickHandler} />
      <SideDrawer show=
          {this.state.sideDrawerOpen} />
      {backdrop}
      
      <Switch>
        <Route path="/" exact component={Slideshow} />
        <Route path="/pages/About" exact component={About} />
        <Route path="/pages/Contact" exact component={Contact} />
        <Route path="/pages/Services" exact component={Services} />
      </Switch> 
      
      <Footer />
    </Router>
    
  );
  }
}

export default App;
