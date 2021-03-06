import React from 'react';
import { connect } from 'react-redux';

import { updateTitle} from '../../actions';

class Title extends React.Component {
  state = {
    newTitleText: this.props.title,
    editing: true
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value})
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText);
    this.setState({ editing: true });
  }

  render() {
    return (
      <div>
        {this.state.editing ? (
          <h1 className='title'>
            {this.props.title}{''}
            <i
              className="far fa-edit"
              onClick={() => this.setState({ editing: false })}
            />
          </h1>
        ):(
          <div>
            <input
              className='title-input'
              type='text'
              name='newTitleText'
              value={this.state.newTitleText}
              onChange={this.handleChanges}
            />
            <button onClick={this.updateTitle}>Update List Name</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { updateTitle}
)(Title)
