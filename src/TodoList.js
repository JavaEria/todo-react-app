import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component{

    itemDeleted = (item) => {
        this.props.removeItem(item);
    }

    itemSelected = (item) => {
        this.props.selectItem(item);
    }

    itemEdited = (item, value) => {
        this.props.editItem(item, value);
    }

    render(){
        return (
        <div>
            {this.props.todosList.map((item) => (
                <TodoItem key = {item.id} todoItem = {item} removeTodo = {this.itemDeleted} selectTodo = {this.itemSelected} editTodo = {this.itemEdited}/>
            ))}
        </div>
        )
    }
}
export default TodoList;