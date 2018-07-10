import React from "react";
import EditTodoItem from './EditTodoItem'

class TodoItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {isEditable: false}
    }

  toggleTodo = () => {
    this.setState({isEditable: this.state.isEditable ? false : true});
  };

  editInputTodo = (todoItem, value) => {
        this.props.editTodo(todoItem, value)
  }

  render() {
    return (
      <div className="TodoItem">
        <input
          className="checkmark"
          type="checkbox"
          checked={this.props.todoItem.isChecked ? "checked" : ""}
          onChange={() => this.props.selectTodo(this.props.todoItem)}
        />

            <EditTodoItem todoItem = {this.props.todoItem} editTodo={this.editInputTodo}/>
            <button className="cross" onClick={() => this.props.removeTodo(this.props.todoItem)}>
                X
            </button>
   
      </div>
    );
  }
}

export default TodoItem;
