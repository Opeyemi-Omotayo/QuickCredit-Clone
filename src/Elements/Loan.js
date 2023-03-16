import React from "react";
import "./Loan.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loan = () => {
  const requestloanHandler = () => {
    toast("You are not eligible!");
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="container">
        <div className="single-card-loan">
          <h2>Active Loan</h2>
          <p>You have no active loan</p>
          <button onClick={requestloanHandler}>Request Loan</button>
        </div>
        <div className="single-card-loan">
          <h2>My Wallet</h2>
          <div className="loan-bg">
            <div>
              <h4>Total Balance</h4>
              <h3>₦0.00</h3>
            </div>
            <div>
              <h4>Loan Balance</h4>
              <h3>₦0.00</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loan;
