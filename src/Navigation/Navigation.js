import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import About from '../About/About'

const Navigation = () => {
  return(
    <nav className="Navigation">
      <div className="logo">LOGO</div>
      <ul>
        <NavLink activeClassName="selected" to="/" exact><li>Home</li></NavLink>
        <NavLink activeClassName="selected" to="/about"><li>About</li></NavLink>
        <NavLink activeClassName="selected" to="/contact"><li>Contact</li></NavLink>
      </ul>
    </nav>
  )
};

export default Navigation;