import React from 'react';
import * as classes from './SavedList.module.css';

const savedList = (props) => (
    <div className={classes.List} onClick={props.clicked}>
        <p>{props.children}</p>
    </div>
)

export default savedList;