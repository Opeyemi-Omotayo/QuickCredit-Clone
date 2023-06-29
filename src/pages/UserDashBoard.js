import React, { useState} from 'react';
import DashBoardDivs from '../Elements/DashBoardDivs';
import SideDrawer from '../Elements/SideDrawer';
import Loan from '../Elements/Loan';
import PaymentCard from '../Elements/PaymentCard';
import TransactionHistory from '../Elements/TransactionHistory';
import NavSideDrawer from '../Elements/NavSideDrawer';
import Backdrop from '../Elements/Backdrop';
import Drawer from '../components/header/Drawer';
import "./UserDashBoard.css";


const UserDashBoard = () => { 
  const [openDrawer, setOpenDrawer] = useState(false);

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  }

  const closeDrawerHandler = () => {
    setOpenDrawer(false); 
  }

  

  return <React.Fragment>
    {openDrawer && <Backdrop onClick={closeDrawerHandler} />}
      <NavSideDrawer show={openDrawer} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer">
        <Drawer text1="DashBoard" text2="Loan" text3="Payment" text4="Transaction History" text7="LOG OUT"/>
        </nav>
      </NavSideDrawer>

    <nav className='main-navigation__nav'>
    <SideDrawer/>
    </nav>

    <button
          className="main-navigation__menu"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
   <div className='body-container'>
    <DashBoardDivs />
    <Loan />
    <PaymentCard />
    <TransactionHistory />
    </div>
 
  </React.Fragment>
}

export default UserDashBoard;
