import React, { Component } from 'react';
import TodoList from '../../containers/TodoList/TodoList';

import classes from './Body.module.css';

class Body extends Component {

    render() {

        return (
            <div className={classes.Body}>
                <TodoList />
            </div>
        );
    }
}

export default Body;