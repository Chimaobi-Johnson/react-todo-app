import React from 'react';
import Button from '../../UI/Button/Button';

import classes from './Tools.module.css';

const tools = (props) => {
    return (
        <div className={classes.Tools}>
            <Button btnType="ButtonUp" clicked={props.btnNew}>NEW TODO</Button>
            <Button btnType="ButtonUp" clicked={props.btnUp}>ADD ITEM </Button>
            <Button btnType="ButtonDown" clicked={props.btnDown}>ADD ITEM </Button>
            <Button btnType="ButtonSave" clicked={props.btnSave}>SAVE LIST </Button>
        </div>
    )
}

export default tools;