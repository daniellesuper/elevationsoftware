import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Logo from './elevation.png';
import { Link } from 'react-router-dom';

const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div className="toolbar_toggle-button">
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className="toolbar_logo">
				<Link to="/">
					<img src={Logo} alt="Elevation Software"/>
				</Link>
			</div>
			<div className="spacer"></div>
			<div className="toolbar_navigation-items">
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/pages/About">
						<li>About Us</li>
					</Link>
					<Link to="/pages/Contact">
						<li>Contact</li>
					</Link>
					<Link to="/pages/Services">
						<li>Services</li>
					</Link>
				</ul>
			</div>
		</nav>
	</header>
);

export default toolbar;