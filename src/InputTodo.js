import React, { Component } from 'react';

class InputTodo extends Component {
   
    createTodo = (todoDescription) => {
       return {id: Math.random().toString(36).substr(2, 9), name: todoDescription, isChecked: false};
    }
    

    sendTodo = (event) => {
        event.preventDefault();
        this.props.recieveTodo(this.createTodo(event.target[0].value));

    }

    render() {
        return (
            <form onSubmit = {this.sendTodo}>
                <input type ="text" name= "inputItem"/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default InputTodo;