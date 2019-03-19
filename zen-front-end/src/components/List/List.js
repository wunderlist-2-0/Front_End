import React, { Component } from 'react';

import Todo from './Todo.js';

class List extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default List;
