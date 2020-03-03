import React from "react";
import PropTypes from "prop-types";
import Toolbar from '../../Toolbar/Toolbar.jsx';
import Footer from '../../Footer/Footer.jsx';

import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
  <Wrapper>
    <Toolbar />
    {children}
    <Footer/>
  </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

