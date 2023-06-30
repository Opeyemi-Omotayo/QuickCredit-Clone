import React, { useEffect, useContext, useState} from 'react';
import "./TransactionHistory.css";

const TransactionHistory = () => {
const [data, setData] = useState([]);
const UserId = localStorage.getItem('id');
const token = localStorage.getItem('token');

useEffect(() => {
  fetch(process.env.REACT_APP_BACKEND_URL + `/api/users/${UserId}/loanrequests`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
       Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setData(data.retrievedLoanRequests);
    });
}, [token, UserId]);

  return  <div className="container">
  <div className="single-card-loan transaction-history">
    <h2>Last 5 transactions</h2>
  <table className='trans-table'>
          <tr>
          <th className="headerr-row">Transaction ID</th>
            <th className="headerr-row">Amount</th>
            <th className="headerr-row">Duration</th>
            <th className="headerr-row">Repayables</th>
            <th className="headerr-row">Status</th>
            <th className="headerr-row">TimeStamp</th>
          </tr>
          <tbody>
            {data.map((details) => {
              return (
                <tr key={details.id}>
                  <td>{details.id}</td>
                  <td>{details.loan_amount}</td>
                  <td>{details.duration_in_days} days</td>
                  <td>{details.repayable_amount}</td>
                  <td>{details.status}</td>
                  <td>{details.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
  {!data.length && (<><div className='underline'> </div>
  <h5>No transactions</h5></>)}
</div>
</div>
}

export default TransactionHistory;
