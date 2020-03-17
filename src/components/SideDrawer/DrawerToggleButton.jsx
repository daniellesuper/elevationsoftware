import React from 'react';
import PropTypes from "prop-types";

const drawerToggleButton = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button_line"></div>
		<div className="toggle-button_line"></div>
		<div className="toggle-button_line"></div>
	</button>
	);


export default drawerToggleButton;
