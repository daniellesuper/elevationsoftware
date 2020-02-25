import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import SideDrawer from './components/SideDrawer/SideDrawer.jsx';
import Backdrop from './components/Backdrop/Backdrop.jsx';
import Footer from './components/Footer/Footer.jsx';

class Layout extends Component{
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  return (
    <div>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.sideDrawerOpen} />
      {backdrop}
      {this.props.children}
      <Footer />
    </div>
  );
  }
}

export default Layout;