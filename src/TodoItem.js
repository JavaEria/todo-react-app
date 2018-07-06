import React, {Component} from 'react';


class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" checked ={this.props.todo.isChecked ? "checked" : ""} onChange ={() => this.props.selectedCallback(this.props.todo)}/>
                <p>{this.props.todo.name}</p>
                <button onClick = {() => this.props.removeCallback(this.props.todo)}>X</button>
            </div>
        )
    } 
}

export default TodoItem;