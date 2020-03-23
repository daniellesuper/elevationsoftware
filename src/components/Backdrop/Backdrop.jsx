import React from 'react';
import PropTypes from "prop-types";

const Backdrop = props => (
	<div className="backdrop" onClick={props.click} />
);

Backdrop.propTypes = {
	click: PropTypes.func.isRequired
};
export default Backdrop;