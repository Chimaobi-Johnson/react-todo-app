import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import * as classes from './Title.module.css';

const title = (props) => (
    <Aux>
        <h3 className={classes.Title}>{props.children}</h3>
    </Aux>
);

export default title;