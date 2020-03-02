import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import Toolbar from "../components/Toolbar/Toolbar.jsx";

import DefaultLayout from "../components/_layout/default";


export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  const Layout = DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
