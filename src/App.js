import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route, Switch, Link, Redirect}
from "react-router-dom"
import history from "./services/history";
import Routes from "./routes";

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
import Layout from './components/Layout/Layout.jsx';
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
    <Router history={history}>
      {/*<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
    {backdrop}*/}
      <Switch>
        <Layout>
          <Route exact path="/" component={Slideshow} />
          <Route exact path="/pages/About" exact component={About} />
          <Route exact path="/pages/Contact" exact component={Contact} />
          <Route exact path="/pages/Services" exact component={Services} />
        </Layout>
      </Switch>
      {/*<Footer />*/}
    </Router>
    
  );
  }
}

export default App;
