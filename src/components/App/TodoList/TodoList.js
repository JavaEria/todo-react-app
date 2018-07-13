import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem'

class TodoList extends Component{

    constructor() {
        super()
        this.filteredData =[];
    }

    itemDeleted = (item) => {
        this.props.removeTodo(item);
    }

    itemSelected = (item) => {
        this.props.selectItem(item);
    }

    itemEdited = (item, value) => {
        this.props.editItem(item, value);
    }

    filterTodos = (filterName) => {
        if(filterName === this.props.filterTypes[1]) {
            this.filteredData = this.props.todosList.filter((obj) => {
            return obj.isChecked;
          })
        } else if(filterName === this.props.filterTypes[2]){
            this.filteredData = this.props.todosList.filter((obj) => {
            return !obj.isChecked;
          })
        } else {
            this.filteredData = this.props.todosList;
        } 
      }

    render(){
        this.filterTodos(this.props.filterName)
        return (
        <div className="TodoList">
            {
                this.filteredData.map((item) => (
                <TodoItem key = {item.id} 
                todoItem = {item} 
                removeTodo = {this.itemDeleted} 
                selectTodo = {this.itemSelected} 
                editTodo = {this.itemEdited}/>))
            }
        </div>
        )
    }
}
export default TodoList;