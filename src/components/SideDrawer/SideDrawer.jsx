import React from 'react';


const sideDrawer = props => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return(
		<nav className={drawerClasses}>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/pages/About">About Us</a></li>
				<li><a href="/pages/Services">Services</a></li>
				<li><a href="/pages/Contact">Contact</a></li>
			</ul>
		</nav>
	);
};

export default sideDrawer;