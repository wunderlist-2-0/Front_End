import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import List from './components/Home/List.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = { props => 
        localStorage.getItem('token') ? (
          <List {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }
    />
  )
}

export default connect()(PrivateRoute);
