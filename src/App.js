import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputItem from './InputItem';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {data: []}
  }
  recieveItem = (item) => {
    this.state.data.push(item);
    this.setState({data: this.state.data});
    console.log(this.state.data);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <InputItem itemCallback = {this.recieveItem}/>
        <TodoList todos = {this.state.data}/>
      </div>
    );
  }
}

export default App;
