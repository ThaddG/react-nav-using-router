import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import About from '../About/About'

const Navigation = () => {
  return(
    <nav className="Navigation">
      <div className="logo">LOGO</div>
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
      </ul>
    </nav>
  )
};

export default Navigation;