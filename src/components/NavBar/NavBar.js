import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar(props) {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
