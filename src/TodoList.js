import React, { Component } from 'react';

class TodoList extends Component{
    constructor(){
        super()
    }
    render(){
        return (
        <div>
            <ul>
                {this.props.todos.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        )
    }
}
export default TodoList;