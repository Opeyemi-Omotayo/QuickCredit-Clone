import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
  return <ul className="fl_right navStyle">
  <li><HashLink to="#aboutUS" smooth>ABOUT </HashLink></li>
    <li><NavLink to="#process">THE PROCESS</NavLink></li>
    <li><NavLink to="#whyUs">WHY US</NavLink></li>
    <li><NavLink to="#faqs">FAQs</NavLink></li>
    <li><NavLink to="/app/users/login">LOGIN</NavLink></li>
    <li><NavLink to="/app/users/registration" className="startBtn">Register</NavLink></li>
  </ul>
}

export default Navigation;
