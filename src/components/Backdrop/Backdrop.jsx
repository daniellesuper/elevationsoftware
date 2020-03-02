import React from 'react';
import PropTypes from "prop-types";

const backdrop = props => (
	<div className="backdrop" onClick={props.click} />
);

backdrop.propTypes = {
	//click: PropTypes.
}

export default backdrop;