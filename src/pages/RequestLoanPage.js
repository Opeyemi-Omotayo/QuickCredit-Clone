import React from 'react';
import SideDrawer from '../Elements/SideDrawer';
import RequestLoan from '../Elements/RequestLoan';

const RequestLoanPage = () => {
  return (
    <div className="flex flex-col font-mono lg:flex-row">
        <div className="w-[100%] lg:w-[25%]">
          <SideDrawer />
        </div>
        <div className="w-[100%] lg:w-[70%]">
          <RequestLoan />
        </div>
      </div>
  )
}

export default RequestLoanPage;
