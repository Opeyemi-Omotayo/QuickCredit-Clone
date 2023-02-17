import React from "react";

import './NavLinks.css';

const NavLinks = () => {
    return <React.Fragment>
          <ul className="fl_right navStyle">
          <li><a href="#aboutUS">ABOUT </a></li>
            <li><a href="#process">THE PROCESS</a></li>
            <li><a href="#whyUs">WHY US</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="login.html">LOGIN</a></li>
            <li><a href="register.html" className="startBtn">Register</a></li>
          </ul>
    </React.Fragment>
};

export default NavLinks;