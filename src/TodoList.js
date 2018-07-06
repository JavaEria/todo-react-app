import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component{
    constructor(){
        super()
    }

    itemDeleted = (item) => {
        this.props.removeTodoCallback(item);
    }

    itemSelected = (item) => {
        this.props.selectTodoCallback(item);
    }

    render(){
        return (
        <div>
            {this.props.todos.map((item) => (
                <TodoItem key = {item.id} todo = {item} removeCallback = {this.itemDeleted} selectedCallback = {this.itemSelected}/>
            ))}
        </div>
        )
    }
}
export default TodoList;