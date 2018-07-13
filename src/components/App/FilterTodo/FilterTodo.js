import React, { Component } from 'react';

class FilterTodo extends Component {
   
    sendFilterName = (filterName) => {
        this.props.filterTodo(filterName);
    }

    render() {
        return (
            <div className="FilterTodo">
                <button onClick= {() => this.sendFilterName(this.props.filterTypes[0])}>All</button>
                <button onClick= {() => this.sendFilterName(this.props.filterTypes[1])}>Completed</button>
                <button onClick= {() => this.sendFilterName(this.props.filterTypes[2])}>Incompleted</button>
            </div>
        )
    }
}

export default FilterTodo;