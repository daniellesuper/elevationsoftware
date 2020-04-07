import React from 'react';
import PropTypes from "prop-types";
import Home from '../../images/home.png';
import Contact from '../../images/contact.png';
import About from '../../images/network.png';
import Logo from '../../images/elevation1.png';




const SideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return(
		<nav className={drawerClasses}>
			<ul>
				<li>
					<a href="/"><img src={Home} alt="home"/>Home</a>
				</li>
				<li>
					<a href="/About"><img src={About} alt="about" />About Us</a>
				</li>
				<li>
					<a href="/Contact"><img src={Contact} alt="contact" />Contact</a>
				</li>
				<li><a href="/"><img id="sideDrawerLogo" src={Logo} alt="ElevationSoftware" /></a></li>
			</ul>
		</nav>
	);
};

SideDrawer.propTypes = {
	show: PropTypes.bool.isRequired
};

export default SideDrawer;