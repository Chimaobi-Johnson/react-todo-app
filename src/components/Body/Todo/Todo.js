import React, { Component } from 'react';
import ListItem from '../../UI/ListItem/ListItem';
import Title from '../../UI/Title/Title';

import classes from './Todo.module.css';



class Todo extends Component {
    render () {
        let todoItem2 = null;
        let currentID = null;
        let listitem = null;
        let listitem2 = null;
        let todoItemArray = null;
        let displayID;
        let todoArray = [];
        let displayTodo2 = null;

        if(this.props.todoCurrentID === null){
            if(this.props.todoUnsavedList) {
                todoItem2 = this.props.todoUnsavedList.map(el => {
                    return <ListItem key={el.id}>{el.todoItem}</ListItem>
                });
            }
        } else if(this.props.todoCurrentID) {
               currentID = this.props.todoCurrentID;
               todoItemArray = this.props.todoSavedList.map(list => {
                     if(list.saveDate === currentID) {
                        listitem = list;
                     }
                     return listitem;
                });
            // Store Saved Name in displayID variable
             displayID = listitem.saveName;

            /* remove last element of array on each loop and 
             store in new array so that there
             is always one item on array each time */
             displayTodo2 = todoItemArray.pop();
             todoArray.push(displayTodo2);
            
             todoItem2 = todoArray.map(el => {
                 listitem2 = el.todoItems.map(item => {
                    return (
                                <div key={item.id}>
                                    <ListItem>{item.todoItem}</ListItem>
                                </div>
                            ); 
                });
                return listitem2;
             });
           
        }

        return (
            <div id="todo" className={classes.Todo}>
                <Title>{displayID}</Title>
                {todoItem2}
            </div>
        );
    
} // End Render Method

}  // End Todo Class

export default Todo;