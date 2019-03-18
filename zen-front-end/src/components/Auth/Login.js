import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Auth.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => {
        const route = this.props.location.state.from || '/';
        this.props.history.push(route)
      })
  }

  handleLogin = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return(
      <div className='cont'>
        <div className='box'>
          <h2>Please Log In</h2>
          <form onSubmit={this.login}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleLogin}
            />
            <button>Log in!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, {  })(Login);
