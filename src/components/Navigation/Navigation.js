import React, { Component } from 'react';
import Menu from './Menu/Menu.js';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
import SideDrawer from './SideDrawer/SideDrawer';

import classes from './Navigation.module.css';

class Nav extends Component {
	state ={
		menuToggle: false
	}

	menuToggleHandler = () => {
		let menuToggle = this.state.menuToggle;
		this.setState({menuToggle: !menuToggle})
	}
	render () {
		return (
			<div className={classes.Navigation}>
				<DrawerToggle clicked={this.menuToggleHandler}/>
				<Menu isSideDrawer={false}/>
				<SideDrawer clicked={this.state.menuToggle}/>
			</div>
		);
	}
}

export default Nav;