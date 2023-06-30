import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Loan.css";
import "react-toastify/dist/ReactToastify.css";

const Loan = () => {
  const history = useHistory();
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

  const requestloanHandler = () => {
    if(data.length){
      history.push("/app/users/history");
    }else{
      history.push("/app/users/loan/request-loan");
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="single-card-loan">
         <h2>Active Loan</h2>
         {data.length ? (<><p>Click below to see more information abour your loan!</p>
          <button onClick={requestloanHandler}>See More</button></>) : (<><p>You have no active loan</p>
          <button onClick={requestloanHandler}>Request Loan</button></>) }   
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
