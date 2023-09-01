import React from 'react';
import SideDrawer from '../Elements/SideDrawer';
import Loan from '../Elements/Loan';

const LoanPage = () => {
  return (
    <div className="flex flex-col font-mono lg:flex-row">
        <div className="w-[100%] lg:w-[25%]">
          <SideDrawer />
        </div>
        <div className="w-[100%] lg:w-[70%]">
          <Loan />
        </div>
      </div>
  )
}

export default LoanPage;
