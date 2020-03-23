import React from "react";
import DefaultLayout from "../components/_layout/default";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";



function RouteWrapper({ component: Component, ...rest }) {
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

export default RouteWrapper;