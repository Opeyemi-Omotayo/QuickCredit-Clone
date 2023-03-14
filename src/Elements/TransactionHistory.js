import React from 'react';

const TransactionHistory = () => {
  return  <div className="container">
  <div className="single-card-loan transaction-history">
    <h2>Last 5 transactions</h2>
    <div>
        <span>Transaction ID</span>
        <span>Amount</span>
        <span>Type</span>
        <span>Description</span>
        <span>Date</span>
        <span>Time</span>
  </div>
  <div className='underline'> </div>
  <h5>No transactions</h5>
</div>
</div>
}

export default TransactionHistory;
