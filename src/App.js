import React, { Component } from "react";
import "./App.css";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import FilterTodo from "./FilterTodo";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: [], filterName: ''}
  }

  recieveTodo = item => {
    this.state.data.push(item);
    this.setState({ data: this.state.data });
  };

  deleteTodo = item => {
    let new_data = this.state.data.filter(obj => {
      return obj.id !== item.id;
    });
    this.setState({ data: new_data });
  };

  toggleTodo = item => {
    let selectedItem = this.state.data.find(object => object.id === item.id);
    selectedItem.isChecked = !selectedItem.isChecked;
    this.setState({ data: this.state.data });
  };

  editTodo = (item, value) => {
    let selectedItem = this.state.data.find(object => object.id === item.id);
    selectedItem.name = value;
    this.setState({ data: this.state.data });
  };

  filterTodos = (filter) => {
    this.setState({filterName: filter})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
        </header>
        <div className="Todo">
        <div className="TodoHeader">
        <InputTodo recieveTodo={this.recieveTodo} />
        <FilterTodo filterTodo={this.filterTodos} />
        </div>
        <TodoList
          todosList={this.state.data}
          filterName = {this.state.filterName}
          removeTodo={this.deleteTodo}
          selectItem={this.toggleTodo}
          editItem={this.editTodo}
        />
        </div>
      </div>
    );
  }
}

export default App;
