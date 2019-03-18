import React, { Component } from 'react';
//import { Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>APP</h1>

      </div>
    );
  }
}

export default App;
