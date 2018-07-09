import React from 'react';
import { Checkbox, Button } from 'react-bootstrap';
import './TodoItem.css';


class TodoItem extends React.Component {
    render() {
        return (
            <div>
               <Checkbox style={{padding: 5, border : '1px solid black', width: 300, margin: '0 auto'}} type="checkbox" checked ={this.props.todo.isChecked ? "checked" : ""} onChange ={() => this.props.selectItem(this.props.todo)}>
               <p style={{padding: 20, display: 'inline'}}>{this.props.todo.name}</p>
               <Button onClick = {() => this.props.removeItem(this.props.todo)}>X</Button>
               </Checkbox>
           </div>
        )
    } 
}

export default TodoItem;