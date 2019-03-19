import React, { Component } from 'react';
import Title from './Title.js';
import TodoList from './TodoList.js';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <Title />
        <TodoList />
      </div>
    );
  }
}

export default Todo;
