import React from "react";
import PropTypes from "prop-types";

import { Toolbar, Footer } from "./styles";


export default function DefaultLayout({ children }) {
  return (
    <>
      <Toolbar />
      
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
