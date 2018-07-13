import React from "react";

class EditTodoItem extends React.Component {
  state = {isEditable: false}
  toggleTodo = () => {
    this.setState({isEditable: !this.state.isEditable});
  };

  editInputTodo = (event, todoItem) => {
    if(this.state.isEditable && event.target.value!=='') {
        this.props.editTodo(todoItem, event.target.value)
    }
    this.toggleTodo();
  }

  getLabel(todoItem) {
    return (
    <p
      onClick={this.toggleTodo}
      className="label">
      {todoItem.name}
    </p>
    )
  }

  getInput(todoItem) {
    return (
      <input
        type="text"
        placeholder={todoItem.name}
        name="inputEdit"
        onBlur={(e) => this.editInputTodo(e, todoItem)}
      />
    )
  }

  render() {
    let todoItem = this.props.todoItem;
    let isEditable = this.state.isEditable;
    return (
      <span className="text">
          { isEditable ? null : this.getLabel(todoItem) }
          { isEditable ? this.getInput(todoItem) : null }
      </span>
    );
  }
}

export default EditTodoItem;
