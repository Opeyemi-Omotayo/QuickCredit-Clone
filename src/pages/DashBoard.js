import React from 'react';
import DashBoardDivs from '../Elements/DashBoardDivs';
import SideDrawer from '../Elements/SideDrawer';
import Loan from '../Elements/Loan';
import PaymentCard from '../Elements/PaymentCard';
import TransactionHistory from '../Elements/TransactionHistory';

//import Navigation from '../components/header/Navigation';

const DashBoard = () => {
  return <React.Fragment>
    <SideDrawer/>
   <div className='body-container'>
    <DashBoardDivs />
    <Loan />
    <PaymentCard />
    <TransactionHistory />
    </div>
   
  </React.Fragment>
}

export default DashBoard;
