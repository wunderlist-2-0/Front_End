import React from 'react';
import { connect } from 'react-redux';

import { addItem, toggleTodo} from '../../actions';
import './Todo.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.value]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newItem);
    this.setState({ newItem: '' });
  };

  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <>
        <div className='todo-list'>
          {this.props.list.map(items => (
            <h4
              key={items.id}
              onClick={() => this.toggleTodo(items.id)}
              className='list-item'
            >
              {items.text}
              {items.completed && <i className="fas fa-check-circle" />}
            </h4>
          ))}
        </div>

        <div className='form-box'>
          <input
            type='text'
            name='newItem'
            value={this.state.newItem}
            onChange={this.handleChanges}
            placeholder='Add new item...'
          />
          <button onClick={this.addItem}>Add Task!</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listBox.items
});

export default connect(
  mapStateToProps,
  { addItem, toggleTodo }
)(TodoList);
