import React, { Component } from 'react';

import Todo from './Todo.js';

class List extends Component {
  render() {
    return (
      <div className="list">
        <Todo />
        <div className='new-list'>
          <h2>Create a new list...</h2>
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
    );
  }
}

export default List;
