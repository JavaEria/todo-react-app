import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import FilterTodo from './FilterTodo'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {data: [], filteredData: []}
  }
  
  recieveTodo = (item) => {
    this.state.data.push(item);
    this.setState({data: this.state.data});
  }

  deleteItem = (item) => {
    let new_data = this.state.data.filter((obj) => {
      return obj.id !== item.id;
    })
    this.setState({data: new_data});
  }

  toggleItem = (item) => {
    let selectedItem = this.state.data.find((object => object.id === item.id))
    selectedItem.isChecked = !selectedItem.isChecked;
    this.setState({data: this.state.data}); 
  }

  editItem = (item, value )=> {
    let selectedItem = this.state.data.find((object => object.id === item.id))
    selectedItem.name = value;
    this.setState({data: this.state.data});  
  }

  // filterTodos = (filterName) => {
  //   if(filterName === 'filter-complete') {
  //     this.state.data.filter((obj) => {
  //       return obj.isChecked;
  //     })
  //   } else if(filterName === 'filter-incomplete'){
  //   } else {
  //   } 
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <InputTodo recieveTodo = {this.recieveTodo}/>
        <FilterTodo filterTodo = {this.filterTodos}/>
        <TodoList todosList = {this.state.data} removeItem = {this.deleteItem} selectItem = {this.toggleItem} editItem = {this.editItem}/>
      </div>
    );
  }
}

export default App;
