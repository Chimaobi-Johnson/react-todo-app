import React from 'react';
import classes from './Menu.module.css';

const menu = (props) => {
	let attachedClasses = [];
	if(props.isSideDrawer) {
		attachedClasses.push(classes.SideBarNav);
	}
	else {
		attachedClasses.push(classes.FullWidthMenu);
	}

	return (
			<div className={classes.NavMenu}>
				<ul>
					<li>HOME</li>
					<li>DATA</li>
					<li>LOGIN</li>
					<li>REGISTER</li>
				</ul>
			</div>
		);
}

export default menu;