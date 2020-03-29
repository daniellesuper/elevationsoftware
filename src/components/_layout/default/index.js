import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../Toolbar/Toolbar.jsx';
import Footer from '../../Footer/Footer.jsx';
import Backdrop from '../../Backdrop/Backdrop.jsx';
import SideDrawer from '../../SideDrawer/SideDrawer.jsx';

const DefaultLayout = ({ children }) => {
  const [ drawerState, setDrawerState ] = useState ({
    sideDrawerOpen: false
  });

  const drawerToggleClickHandler = () => {
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
  <>
    <Toolbar drawerClickHandler={drawerToggleClickHandler}/>
    <SideDrawer show={drawerState.sideDrawerOpen}/>
    {backdrop}
    {children}
    <Footer/>
  </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  sideDrawerOpen: PropTypes.bool
};

export default DefaultLayout;