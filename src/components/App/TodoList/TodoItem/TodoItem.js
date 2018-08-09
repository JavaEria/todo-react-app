import React from "react";
import EditTodoItem from './EditTodoItem/EditTodoItem'

class TodoItem extends React.Component {
  
  editInputTodo = (todoItem, value) => {
        this.props.editTodo(todoItem, value)
  }

  render() {
    let todoItem = this.props.todoItem;
    let selectTodo = this.props.selectTodo;
    let removeTodo = this.props.removeTodo;
    return (
      <div className="TodoItem">
        <input
          className="checkmark"
          type="checkbox"
          checked={todoItem.isChecked ? "checked" : ""}
          onChange={() => selectTodo(todoItem)}
        />

            <EditTodoItem todoItem = {todoItem} editTodo={this.editInputTodo}/>
            <button className="cross" onClick={() => removeTodo(todoItem)}>
                X
            </button>
   
      </div>
    );
  }
}

export default TodoItem;
