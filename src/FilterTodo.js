import React, { Component } from 'react';

class FilterTodo extends Component {
   
    sendFilterName = (event) => {
        this.props.filterTodo(event.target.id);
    }

    render() {
        return (
            <div>
                <button id ='filter-all' onClick= {this.sendFilterName}>All</button>
                <button id ='filter-complete' onClick= {this.sendFilterName}>Completed</button>
                <button id ='filter-incomplete' onClick= {this.sendFilterName}>Incompleted</button>
            </div>
        )
    }
}

export default FilterTodo;