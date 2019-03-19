import React from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css';

const NavBar = ({props}) => (
  <div className='nav'>

    <div className='nav-logo'>
      <h1>Wunderlist 2.0</h1>
    </div>

    <div className='nav-items'>
      <Link to='/' className='nav-item'>Home</Link>
      <Link to='/list' className='nav-item'>My List</Link>
      <Link to='/login' className='nav-item'>Login/Register</Link>
    </div>
  </div>
);

export default NavBar;
