import React from 'react';
import * as classes from './ListItem.module.css';

const listItem = (props) => (
   <div className={classes.Lists}>
       <p className={classes.Item}>{props.children}<span className={classes.Edit}>Edit</span><span className={classes.Delete}>Delete</span></p>
   </div>
)

export default listItem;