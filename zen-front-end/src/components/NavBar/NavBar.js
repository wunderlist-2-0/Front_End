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
      <Link to='/' className='nav-item'>FOO</Link>
      <Link to='/' className='nav-item'>FOO</Link>
    </div>
  </div>
);

export default NavBar;
