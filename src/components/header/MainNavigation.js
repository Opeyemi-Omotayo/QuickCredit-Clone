import React from "react";

import logo from "../../logo.svg";
import './MainNavigation.css';
import NavLinks from "./NavLinks";

const MainNavigation =() => {
    return <React.Fragment>
         <div className="wrapper" >
      <header>
        <div className="header fl_left">
        <img src={logo} className="App-logo" alt="logo" /> 
        </div>
       <NavLinks />
      </header>
    </div>

    </React.Fragment>
};

export default MainNavigation;