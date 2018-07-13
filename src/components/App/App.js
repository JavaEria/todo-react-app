import React, { Component } from "react";
import "./App.css";
import InputTodo from "./InputTodo/InputTodo";
import TodoList from "./TodoList/TodoList";
import FilterTodo from "./FilterTodo/FilterTodo";
const filterTypes = ['all', 'complete', 'incomplete']

class App extends Component {
  state = {data: [], filterName: ''}

  recieveTodo = item => {
    let data = [...this.state.data, item]
    this.setState({ data: data });
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
    let todosList = this.state.data;
    let filterName = this.state.filterName;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
        </header>
        <div className="Todo">
        <div className="TodoHeader">
        <InputTodo recieveTodo={this.recieveTodo} />
        <FilterTodo filterTodo={this.filterTodos} filterTypes={filterTypes}/>
        </div>
        <TodoList
          todosList={todosList}
          filterName = {filterName}
          removeTodo={this.deleteTodo}
          selectItem={this.toggleTodo}
          editItem={this.editTodo}
          filterTypes = {filterTypes}
        />
        </div>
      </div>
    );
  }
}

export default App;
