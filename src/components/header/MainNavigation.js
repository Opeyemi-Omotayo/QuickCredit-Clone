import React from "react";

import logo from "../../logo.svg";
import './MainNavigation.css';
import Navigation from "./Navigation";

const MainNavigation =() => {
    return <React.Fragment>
      <div className="wrapper" >
      <header>
        <div className="header fl_left">
        <img src={logo}   alt="logo" /> 
        </div>
      <Navigation />
      </header>
    </div>
    </React.Fragment>

    
};

export default MainNavigation;