import React, { Component } from 'react';
import Tools from '../../components/Body/Tools/Tools';
import Todo from '../../components/Body/Todo/Todo';
import Stats from '../../components/Body/Stats/Stats';
import Aux from '../../hoc/Auxillary/Auxillary';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';

class TodoList extends Component {
    state = {
        todoUnsaved: [],
        todoSaved: [],
        currentTodo: null,
        addingItem: false,
        savingItem: false
    }

    createNewTodoHandler = () => {
        let currentTodo = null;
        let todoUnsaved = [...this.state.todoUnsaved];
        todoUnsaved.length = 0;

        this.setState({currentTodo: currentTodo, todoUnsaved: todoUnsaved})
    }

    addedItem = () => {
        // Get Input data
        let inputData = document.getElementById('todoText').value;

        let todoListUnsaved = [...this.state.todoUnsaved];
        let todoSaved = [...this.state.todoSaved];
        let currentID = this.state.currentTodo;
        let date = new Date();
        let inputObj = null;
        let listitem = null;

        if(inputData !== '') {
            
            if(currentID) {
  
                 todoSaved.map(el => {
                    if(el.saveDate === currentID) {
                        inputObj = {
                            id: date,
                            todoItem: null
                        }
                        inputObj.todoItem = inputData;
                        // todoListUnsaved.push(inputObj);
                        listitem = el.todoItems.push(inputObj);
                    }
                    return listitem;
                });

            }
            else {
                inputObj = {
                    id: date,
                    todoItem: null
                }
                inputObj.todoItem = inputData;
                todoListUnsaved.push(inputObj);
            }
               
            }
            document.getElementById('todoText').value = '';

            this.setState({addingItem: false, todoUnsaved: todoListUnsaved, todoSaved: todoSaved});
            
    
            console.log(this.state);
        }


    removeAddingItemModal = () => {
        this.setState({addingItem: false})
    }

    addTodoListHandler = () => {
        const todoText = document.getElementById('todoText');
        todoText.focus();
        this.setState({addingItem: true})
    }

    saveModalHandler = () => {
        let currentTodo = this.state.currentTodo;
        if(currentTodo) {
            alert('SAVE SUCCESSFULL');
        }
        else {
            this.setState({savingItem: true});
        }
    }

    removeSaveModalHandler = () => {
        this.setState({savingItem: false});
    }

    saveTodoListHandler = () => {
        let saveText = document.getElementById('saveText').value;
        let todoSaved = [...this.state.todoSaved];
        let todoUnsaved = [...this.state.todoUnsaved]; // create new array
        let initialTodo = [...this.state.todoUnsaved];
        let currentTodo = this.state.currentTodo;
        let date = new Date();
        let todoListObj;
        if(currentTodo === null) {
             todoListObj = {
                saveDate: date,
                saveName: saveText,
                todoItems: null
            }
            currentTodo = todoListObj.saveDate;
            todoListObj.todoItems = initialTodo;
            todoSaved.push(todoListObj);
        }

            todoUnsaved.length = 0;
            this.setState({todoUnsaved: todoUnsaved, todoSaved: todoSaved, currentTodo: currentTodo, savingItem: false});
            console.log(this.state);
        }
        
    

    displaySavedItems = (itemID) => {
        let currentTodo = itemID;
       this.setState({currentTodo: currentTodo});
    }

    render () {
        let todoForm = <div>
                          <input id="todoText" type="text" placeholder="Enter Task" />
                          <Button btnType="ButtonUp" clicked={this.addedItem}>ADD</Button>
                          <Button btnType="ButtonDown" clicked={this.removeAddingItemModal}>CANCEL</Button>
                        </div>

        let savingForm = <div>
                        <input id="saveText" type="text" placeholder="Enter Todo Name" />
                            <Button btnType="ButtonUp" clicked={this.saveTodoListHandler}>SAVE</Button>
                            <Button btnType="ButtonDown" clicked={this.removeSaveModalHandler}>CANCEL</Button>
                        </div>
        return (
            <Aux>
                <Modal show={this.state.addingItem}>
                    {todoForm}
                </Modal>
                <Modal show={this.state.savingItem}>
                    {savingForm}
                </Modal>
                <Tools btnUp={this.addTodoListHandler} btnNew={this.createNewTodoHandler} btnSave={this.saveModalHandler}/>
                <Todo todoUnsavedList={this.state.todoUnsaved} todoSavedList={this.state.todoSaved} displayTodo={this.state.displayTodo} todoCurrentID={this.state.currentTodo}/>
                <Stats todoSaved={this.state.todoSaved} clicked={(itemID) => this.displaySavedItems(itemID)}/>
            </Aux>
            
        )
    }
}

export default TodoList;