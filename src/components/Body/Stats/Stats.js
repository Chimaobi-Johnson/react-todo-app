import React from 'react';
import SavedList from '../../../components/UI/SavedList/SavedList';
import Title from '../../UI/Title/Title';

import classes from './Stats.module.css';

const stats = (props) => {
    let savedItems = null;
    if(props.todoSaved) {
        const todoSaved = props.todoSaved;
        savedItems = todoSaved.map(el => {
            return <SavedList clicked={() => props.clicked(el.saveDate)} key={el.saveDate}>{el.saveName}</SavedList>
        });
    }
    return (
        <div className={classes.Stats}>
            <Title>Saved Lists</Title>
            {savedItems}
        </div>
    )
}

export default stats;