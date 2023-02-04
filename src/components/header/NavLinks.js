import React from "react";
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return <React.Fragment>
          <ul className="fl_right navStyle">
          {/* <li><NavLink to="/">ABOUT</NavLink></li>
            <li>
            <NavLink to="/process">THE PROCESS</NavLink>
            </li>
            <li><NavLink to="/whyus">WHY US</NavLink></li>
            <li><NavLink to="/faqs">FAQS</NavLink></li>
            <li><NavLink to="/login">LOGIN</NavLink></li>
            <li><NavLink to="/register">REGISTER</NavLink></li> */}
          </ul>
    </React.Fragment>
};

export default NavLinks;