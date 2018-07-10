import React from "react";
import './EditTodoItem.css'

class EditTodoItem extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {isEditable: false}
    }

  toggleTodo = () => {
    this.setState({isEditable: this.state.isEditable ? false : true});
  };

  editInputTodo = (event, todoItem) => {
    if(this.state.isEditable) {
        this.props.editTodo(todoItem, event.target.value)
    }
    this.toggleTodo();
  }

  render() {
    return (
      <div>
          {this.state.isEditable ? null : (
            <p
              onClick={() => this.toggleTodo()}
              className="label">
              {this.props.todoItem.name}
            </p>
          )}
          {this.state.isEditable ? (
            <input
              type="text"
              placeholder={this.props.todoItem.name}
              name="inputEdit"
              onBlur={(e) => this.editInputTodo(e, this.props.todoItem)}
            />
          ) : null}
      </div>
    );
  }
}

export default EditTodoItem;
