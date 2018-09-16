import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from '../src/container/AddTodo';
import VisibleTodoList from '../src/container/visibleTodoList';

class App extends Component {
  
  render() {
    return (
        <div>
           <AddTodo/>
           <VisibleTodoList/>
        </div>
    );
  }
}

export default App;
