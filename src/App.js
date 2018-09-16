import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VisibleTodoList from '../src/container/visibleTodoList';

class App extends Component {
  
  render() {
    return (
        <VisibleTodoList/>
    );
  }
}

export default App;
