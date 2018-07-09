import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component{

    itemDeleted = (item) => {
        this.props.removeItem(item);
    }

    itemSelected = (item) => {
        this.props.selectItem(item);
    }

    render(){
        return (
        <div>
            {this.props.todos.map((item) => (
                <TodoItem key = {item.id} todo = {item} removeItem = {this.itemDeleted} selectItem = {this.itemSelected}/>
            ))}
        </div>
        )
    }
}
export default TodoList;