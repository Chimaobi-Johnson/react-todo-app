import React, { Component } from 'react';
import classes from './Todo.module.css';


class Todo extends Component {
    state = {
        todosavedItem: []
    }

    // componentDidUpdate() {
    //     // if(this.props.todoSavedList.length !== 0) {
    //     //     let todosavedItem = [...this.props.todoSavedList]
    //     //     this.setState({todosavedItem: todosavedItem});
    //     //     console.log(this.state.todosavedItem + '[todo.js]');
    //     // }
    //     console.log(this.props.todoUnsavedList);
    // }
    // shouldComponentUpdate (nextProps, nextState) {

    //     console.log('SHOULDCOMPONENTUPDATE');

    //     return nextProps.todoUnSavedList.length === 0;

    //     //  if(this.props.todoUnSavedList.length === 0) {
    //     //     const todoSavedList = this.props.todoSavedList;
    //     //         this.varia.todoItem = todoSavedList.map(el => {
    //     //         return (
    //     //             <div key={el.id}>
    //     //                     <h3>{el.saveName}</h3>
    //     //                     <p>{el.todoItems.todoItem}</p>
    //     //             </div>
    //     //         )        
                
    //     //     });
    //     // }
    // }
    render () {
        // let todoItem = null;
        let todoItem2 = null;
        let currentID = null;
        let listitem = null;
        let listitem2 = null;
        let todoItemArray = null;
        let displayID;
        let todoArray = [];
        let displayTodo2 = null;
        // let node;
        // if(this.props.todoUnSavedList) {
        //     const todoUnSavedList = this.props.todoUnSavedList;
        //     todoItem = todoUnSavedList.map(el => {
        //         // node = document.getElementById('todo');
        //         // return node.insertAdjacentHTML('afterbegin', `<p key=${el.id}>${el.todoItem}</p>`)
        //         return <p key={el.id}>{el.todoItem}</p> 
        //     });
        // }

        if(this.props.todoCurrentID === null){
            if(this.props.todoUnsavedList) {
                todoItem2 = this.props.todoUnsavedList.map(el => {
                    return <p key={el.id}>{el.todoItem}</p>
                })
            } else {
                todoItem2 = 'No';
            }

        } else if(this.props.todoCurrentID && this.props.displayTodo === null) {
            currentID = this.props.todoCurrentID;
               todoItemArray = this.props.todoSavedList.map(list => {
                     if(list.saveDate === currentID) {
                        listitem = list;
                     }
                     return listitem;
                });

             displayID = listitem.saveName;
             displayTodo2 = todoItemArray.pop();
             todoArray.push(displayTodo2);
             console.log(todoArray);
             todoItem2 = todoArray.map(el => {
                 listitem2 = el.todoItems.map(item => {
                    return (
                                <div key={item.id}>
                                <p>{item.todoItem}</p>
                                </div>
                            ); 
                });
                return listitem2;
                     
                    //  console.log(el)
                    // displayTodo2 = el.pop();
                    // todoArray.push(displayTodo2) //its a reference type
                    // console.log(todoArray);
                    // listitem2 = el.todoItems.map(item => {
                    //     return (
                    //             <div key={item.id}>
                    //             <p>{item.todoItem}</p>
                    //             </div>
                    //         ); 
                    //     });
                    
                  
                    // return listitem2;
             });
            //  todoItemArray.length = 0;
            //  console.log(todoItemArray);
        }
        // else if(this.props.todoCurrentID && this.props.displayTodo) {
        //     let displayTodo = this.props.displayTodo;
        //         displayTodo2 = displayTodo.pop();
        //         todoArray.push(displayTodo2) //its a reference type
        //         console.log(todoArray);
   
        //     //   displayID = this.props.displayTodo.saveName;
        //     // todoItem2 = this.props.displayTodo.todoItems.map(list => {
        //     //     // // displayID = list.saveName;
        //     //     // listitem = list.todoItems.map(item => {
        //     //     //     return (
        //     //     //         <div key={item.id}>
        //     //     //         <p>{item.todoItem}</p>
        //     //     //         </div>
        //     //     //     ); 
        //     //     // });
        //     //     // return listitem;
        //     //     console.log(list);
        //     // });
        // //   displayTodo.length = 0;
        // //   console.log(displayTodo);
        // }

        return (
            <div id="todo" className={classes.Todo}>
                {displayID}
                {todoItem2}
              
            </div>
        );
    }
}

export default Todo;