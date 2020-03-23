import React from 'react';
import PropTypes from "prop-types";

const DrawerToggleButton = props => (
	<button className="toggle-button" onClick={props.click}>
		<div className="toggle-button_line"></div>
		<div className="toggle-button_line"></div>
		<div className="toggle-button_line"></div>
	</button>
	);

	DrawerToggleButton.propTypes = {
		show: PropTypes.func
	};

export default DrawerToggleButton;
