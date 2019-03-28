import React from 'react';
import classes from './Stats.module.css';

const stats = (props) => {
    let savedItems = null;
    if(props.todoSaved) {
        const todoSaved = props.todoSaved;
        savedItems = todoSaved.map(el => {
            return <p onClick={() => props.clicked(el.saveDate)} key={el.saveDate}>{el.saveName}</p>
        });
    }
    return (
        <div className={classes.Stats}>
            {savedItems}
        </div>
    )
}

export default stats;