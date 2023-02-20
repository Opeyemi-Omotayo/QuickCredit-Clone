import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return <ul className="fl_right navStyle">
  <li><NavLink to="#aboutUS">ABOUT </NavLink></li>
    <li><NavLink to="#process">THE PROCESS</NavLink></li>
    <li><NavLink to="#whyUs">WHY US</NavLink></li>
    <li><NavLink to="#faqs">FAQs</NavLink></li>
    <li><NavLink to="/app/login">LOGIN</NavLink></li>
    <li><NavLink to="/app/register" className="startBtn">Register</NavLink></li>
  </ul>
}

export default Navigation
