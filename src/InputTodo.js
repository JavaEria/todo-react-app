import React, { Component } from 'react';
import uuid from'react-native-uuid';

class InputTodo extends Component {
   
    createTodo = (todoDescription) => {
       return {id: uuid.v1(), name: todoDescription, isChecked: false};
    }
    

    sendTodo = (event) => {
        event.preventDefault();
        this.props.recieveTodo(this.createTodo(event.target.elements.inputItem.value));

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