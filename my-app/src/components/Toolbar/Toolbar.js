import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="toolbar_logo"><a href="/">The Logo</a></div>
			<div className="spacer"></div>
			<div className="toolbar_navigation-items">
				<ul>
					<li><a href="/.App.js"> Home</a></li>
					<li><a href="/.App.js">About Us</a></li>
					<li><a href="/.App.js">Services</a></li>
					<li><a href="/.App.js">Contact</a></li>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;