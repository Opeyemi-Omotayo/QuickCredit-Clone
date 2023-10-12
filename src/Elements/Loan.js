import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
      <div className="flex flex-col items-center justify-between mx-4 mt-6 lg:mx-0 lg:flex-row">
        <div className="bg-white w-full mb-8 lg:mb-0 lg:w-[48%] h-[300px] rounded-lg shadow-md hover:translate-y-[2px]">
         <h2 className="p-4 text-lg font-semibold">Active Loan</h2>
         <div className="flex flex-col items-center justify-center h-[210px]">
         {data.length ? (<><p className="px-6 text-center">Click below to see more information abour your loan!</p>
          <button onClick={requestloanHandler} className="px-4 py-3 text-white bg-green-600 rounded shadow">See More</button></>) : (<><p>You have no active loan</p>
          <button onClick={requestloanHandler} className="px-4 py-3 text-white bg-green-600 rounded shadow">Request Loan</button></>) }   
         </div>
        </div>
        <div className="bg-white w-full lg:w-[48%] h-[300px] rounded-lg shadow-md hover:translate-y-[2px]">
          <h2 className="p-4 text-lg font-semibold">My Wallet</h2>
          <div className="flex flex-col items-start px-4 justify-center mx-8 h-[210px] rounded bg-blue-300">
            <div>
              <h4 className="font-semibold text-blue-700">Total Balance</h4>
              <h3>₦0.00</h3>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700">Loan Balance</h4>
              <h3>₦0.00</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loan;
