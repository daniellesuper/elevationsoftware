import React from "react";
import PropTypes from "prop-types";
import Toolbar from '../../Toolbar/Toolbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import backdrop from '../../Backdrop/Backdrop.jsx';
import SideDrawer from '../../SideDrawer/SideDrawer.jsx';

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
  <Wrapper>
    <Toolbar />
    <SideDrawer />
    {backdrop}
    {children}
    <Footer/>
  </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

// drawerClickHandler={this.drawerToggleClickHandler}
// show={this.state.sideDrawerOpen}
