import React, {Component} from 'react';


class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked = {this.props.todo.isChecked ? "checked" : ""}/>
                <p>{this.props.todo.name}</p>
                <button>X</button>
            </div>
        )
    } 
}

export default TodoItem;