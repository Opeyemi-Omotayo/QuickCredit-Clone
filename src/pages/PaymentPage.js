import React from 'react';
import SideDrawer from '../Elements/SideDrawer';
import PaymentCard from '../Elements/PaymentCard';

const PaymentPage = () => {
  return (
    <div className="flex flex-col font-mono lg:flex-row">
        <div className="w-[100%] lg:w-[25%]">
          <SideDrawer />
        </div>
        <div className="w-[100%] lg:w-[70%]">
          <PaymentCard />
        </div>
      </div>
  )
}

export default PaymentPage;
