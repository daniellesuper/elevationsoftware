import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from './elevationtoolbar.png';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


const toolbar = (props) => (
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
			<div className="toolbar_navigation-items">
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/pages/Services">
						<li>Services</li>
					</Link>
					<Link to="/pages/About">
						<li>About Us</li>
					</Link>
					<Link to="/pages/Contact">
						<li>Contact Us</li>
					</Link>
				</ul>
			</div>
		</nav>
	</header>
);

toolbar.propTypes = {
	drawerClickHandler: PropTypes.string.isRequired
}
export default toolbar;