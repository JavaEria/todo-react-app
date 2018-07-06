import React, { Component } from 'react';

class TodoList extends Component{

    // constructor(props){
    //     super(props);
    //     console.log(this.props.listName);
    // }
    allItems = [{id: 234563, name: 'happy', isChecked: false},{id: 763832, name: 'open', isChecked: true}]
    render(){
        return (
        <div>
            <ul>
                {this.allItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        )
    }
}
export default TodoList;