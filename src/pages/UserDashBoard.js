import React from "react";
import DashBoardDivs from "../Elements/DashBoardDivs";
import SideDrawer from "../Elements/SideDrawer";
import Loan from "../Elements/Loan";
import PaymentCard from "../Elements/PaymentCard";
import TransactionHistory from "../Elements/TransactionHistory";

const UserDashBoard = () => {

  return (
    <React.Fragment>
      <div className="flex flex-col font-mono lg:flex-row">
        <div className="w-[100%] lg:w-[25%]">
          <SideDrawer />
        </div>
        <div className="w-[100%] lg:w-[70%] my-8" data-aos="fade-up">
          <DashBoardDivs />
          <Loan />
          <PaymentCard />
          <TransactionHistory />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDashBoard;
