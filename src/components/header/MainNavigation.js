import React, {useState} from "react";

import logo from "../../logo.svg";
import './MainNavigation.css';
import Navigation from "./Navigation";
import Backdrop from "../../Elements/Backdrop";
import NavSideDrawer from "../../Elements/NavSideDrawer";
import Drawer from "./Drawer";

const MainNavigation =() => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [header, setHeader] = useState(false);

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  }

  const closeDrawerHandler = () => {
    setOpenDrawer(false); 
  }

  const changeHeaderBackground = () => {
   if (window.scrollY >= 80) {
    setHeader(true);
   } else {
    setHeader(false);
   }
  }

window.addEventListener("scroll", changeHeaderBackground);
    return <React.Fragment>
      <div className={header ? 'wrapper active' : 'wrapper'} >
      {openDrawer && <Backdrop onClick={closeDrawerHandler} />}
      <NavSideDrawer show={openDrawer} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer">
        <Drawer text1="ABOUT" text2="THE PROCESS" text3="WHY US"  text4="FAQs" text5="LOGIN" text6="Register"/>
        </nav>
      </NavSideDrawer>

    
      <header>
        <div className="header fl_left">
        <img src={logo}   alt="logo" /> 
        </div>
        <nav className="main-navigation__nav">
        <Navigation />
        </nav>
      <button
          className="main-navigation__menu"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
    </div>
    </React.Fragment>

    
};

export default MainNavigation;