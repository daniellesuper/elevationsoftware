import React, { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from '../../Toolbar/Toolbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import Backdrop from '../../Backdrop/Backdrop.jsx';
import SideDrawer from '../../SideDrawer/SideDrawer.jsx';

import { Wrapper } from "./styles";

const DefaultLayout = ({ children }, props) => {
  const [ drawerState, setDrawerState ] = useState ({
    sideDrawerOpen: false
  });

  const drawerToggleClickHandler = () => {
    console.log("clicked");
    setDrawerState( (prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  const backdropClickHandler = () => {
    setDrawerState({sideDrawerOpen: false});
  };

  let backdrop;
  if (drawerState.sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler}/>
  }
  return (
  <Wrapper>
    <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
    <SideDrawer show={drawerState.sideDrawerOpen}/>
    {backdrop}
    {children}
    <Footer/>
  </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DefaultLayout;