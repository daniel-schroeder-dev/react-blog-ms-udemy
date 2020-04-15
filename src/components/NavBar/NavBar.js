import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar(props) {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        <li className="nav-bar__nav-item">
          <NavLink className="nav-bar__nav-link" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink className="nav-bar__nav-link" to="/posts" exact>Blog</NavLink>
        </li>
        <li className="nav-bar__nav-item">
          <NavLink className="nav-bar__nav-link" to="/posts/new" exact>Create Post</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
