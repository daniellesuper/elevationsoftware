import React from 'react';
import PropTypes from "prop-types";

const backdrop = props => (
	<div className="backdrop" onClick={props.click} />
);


export default backdrop;