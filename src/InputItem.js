import React, { Component } from 'react';

class InputItem extends Component {
   
    createItem = (itemDescription) => {
       return {id: Math.floor(Math.random() * 1e7), name: itemDescription, isChecked: false};
    }
    

    sendItem = (event) => {
        event.preventDefault();
        this.props.itemCallback(this.createItem(event.target[0].value));

    }

    render() {
        return (
            <form onSubmit = {this.sendItem}>
                <input type ="text" name= "inputItem"/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default InputItem;