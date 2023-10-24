// src/components/Navbar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About us</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink> */}
      </ul>
    </nav>
  )
}

export default Navbar