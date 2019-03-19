import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import PrivateRoute from './components/PrivateRoute.js'

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
        <Login />
        <Route exact path='/' Component={ Home } />
        <Route  path='/list/' Component={ List } />
        <Route path='/login' Component={Login} />
        <Route path='/signup' Component={SignUp} />
      </div>
    );
  }
}

export default App;
