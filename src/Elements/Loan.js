import React from "react";
import "./Loan.css";

const Loan = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="single-card-loan">
          <h2>Active Loan</h2>
          <p>You have no active loan</p>
          <button>Request Loan</button>
        </div>
        <div className="single-card-loan">
          <h2>My Wallet</h2>
          <div className="loan-bg">
            <div>
              <h4>Total Balance</h4>
              <h5>₦0.00</h5>
            </div>
            <div>
              <h4>Loan Balance</h4>
              <h5>₦0.00</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loan;
