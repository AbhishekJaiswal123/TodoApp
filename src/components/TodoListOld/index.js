import React, { Component } from 'react';
import './styles.css';

/* A TodoList without Redux and without any seperation of presentational and container component.
 As seen from the code to many responsibility for a single component and too many states to manage, this code can be easily be converted 
 into more mantainable and easy to read */

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state = {tabs: [{"name": "All", "active": false},
                             {"name": "Active", "active": false},   
                             {"name": "Completed", "active": false}],
                      todoList: [],
                      filteredTodoList: [],
                      activeTab: 0};

    }

    componentDidMount(){
        this.setState({filteredTodoList: this.state.todoList});
    }

    getFilteredTodos(index){
        console.log('index', index);
        switch(index) {
            case 1: 
                return this.state.todoList.filter(todo => !todo.completed);  
            case 2:
                return this.state.todoList.filter(todo => todo.completed)
            case 0: 
            default:
                 return this.state.todoList; 
        }
    }

    addTodoItem(item){
        return this.setState({todoList: [...this.state.todoList, {'text': item, 'completed': false}]});
    }

    getTabClass(index){
        return this.state.activeTab === index ? 'active-tab' : '';
    }


    changeSlideIndex(index){
        this.setState({activeTab: index});
    }

    toggleTodo(index) {
        return this.setState({todoList: this.state.todoList.map((todoItem, i) => {
            return index === i ? Object.assign({}, todoItem, {'completed': !todoItem.completed}) : todoItem; 
        })})
    }

    render(){
        let filteredTodoList = this.getFilteredTodos(this.state.activeTab);
        return(
            <div className="todolist">
                <div className="input-wrapper">
                    <input id="input" className="input" type="text" placeholder="Enter your todo item"/>
                    <button className="add-btn" onClick={() => this.addTodoItem(document.getElementById('input').value)}>Add</button>
                </div>

                <div className="tabs">
                   {this.state.tabs.map((tab, index) => {
                       return <li onClick={() => this.changeSlideIndex(index)} key={index}> 
                                 <button className={`tab-btn ${this.getTabClass(index)}`}>{tab.name}</button>
                              </li>
                   })}
                </div>
                <ul>
                    {filteredTodoList.length > 0 && filteredTodoList.map((todoItem, index) => {
                        return <li style={{textDecoration: todoItem.completed ? 'line-through': ''}} key={index} onClick={() => this.toggleTodo(index)}>{todoItem.text}</li>
                    })}
                </ul>
                
            </div>
        )
    }
}

export default TodoList;