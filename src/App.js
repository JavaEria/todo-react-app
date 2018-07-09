import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {data: []}
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <InputTodo recieveTodo= {this.recieveTodo}/>
        <TodoList todosList = {this.state.data} removeItem = {this.deleteItem} selectItem = {this.toggleItem}/>
      </div>
    );
  }
}

export default App;
