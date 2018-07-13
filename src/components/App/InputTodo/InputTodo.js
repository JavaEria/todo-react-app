import React, { Component } from 'react';
import uuid from'react-native-uuid';

class InputTodo extends Component {
   
    createTodo = (todoDescription) => {
       return {id: uuid.v1(), name: todoDescription, isChecked: false};
    }
    

    sendTodo = (event) => {
        event.preventDefault();
        this.props.recieveTodo(this.createTodo(event.target.elements.inputTodo.value));
    }

    render() {
        return (
            <form onSubmit = {this.sendTodo} className="InputTodo">
                <input type ="text" name= "inputTodo"/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default InputTodo;