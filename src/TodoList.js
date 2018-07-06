import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component{
    constructor(){
        super()
    }
    render(){
        return (
        <div>
            {this.props.todos.map((item) => (
                <TodoItem todo = {item}/>
            ))}
        </div>
        )
    }
}
export default TodoList;