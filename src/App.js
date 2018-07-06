import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputItem from './InputItem';
import TodoList from './TodoList';

class App extends Component {
  
  recieveItem = (item) => {
    this.props.listName = item;
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <InputItem itemCallback = {this.recieveItem}/>
        <TodoList sentItem = {this.props.listName}/>
      </div>
    );
  }
}

export default App;
