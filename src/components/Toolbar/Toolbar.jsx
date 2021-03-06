import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../images/elevation1.png';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Toolbar = (props) => (
		<header className="toolbar">
			<nav className="toolbar_navigation">
				<div className="toolbar_logo">
					<Link to="/">
						<img src={Logo} alt="Elevation Software"/>
					</Link>
				</div>
				<div className="toolbar_toggle-button">
					<DrawerToggleButton click={props.drawerClickHandler} />
				</div>
				<div className="toolbar_navigation-items">
					<ul>
						<Link to="/">
							<li>Home</li>
						</Link>
						<Link to="/About">
							<li>About Us</li>
						</Link>
						<Link to="/Contact">
							<li>Contact</li>
						</Link>
					</ul>
				</div>
			</nav>
		</header>
);

Toolbar.propTypes = {
	drawerClickHandler: PropTypes.func.isRequired
};

export default Toolbar;