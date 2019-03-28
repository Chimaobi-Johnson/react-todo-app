import React from 'react';
import Menu from '../Menu/Menu';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer];
    if(props.clicked === true) {
        attachedClasses.push(classes.Open)
    }
    else {
        attachedClasses.push(classes.Close);
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <h5>My Todo List</h5>
            <span>Date Here</span>
            <p>PICTURE</p>
            <Menu isSideDrawer={true}/>
        </div>
    );
}

export default sideDrawer;