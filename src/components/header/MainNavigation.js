import React from "react";

import logo from "../../logo.svg";
import './MainNavigation.css';
import NavLinks from "./NavLinks";

const MainNavigation =() => {
    return(
      <div className="wrapper" >
      <header>
        <div className="header fl_left">
        <img src={logo} className="App-logo" alt="logo" /> 
        </div>
       <NavLinks />
      </header>
    </div>
    );
};

export default MainNavigation;