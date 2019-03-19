import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js'

import './App.css';

import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import List from './components/Home/List.js';
import Login from './components/Auth/Login.js';
import SignUp from './components/Auth/SignUp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={ Home } />
        <PrivateRoute path='/list' component={List} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  }
}

export default App;
