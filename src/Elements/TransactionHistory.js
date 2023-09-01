import React, { useEffect, useState } from "react";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const [data, setData] = useState([]);
  const UserId = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(
      process.env.REACT_APP_BACKEND_URL + `/api/users/${UserId}/loanrequests`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.retrievedLoanRequests);
      });
  }, [token, UserId]);

  return (
    <div className="overflow-x-auto lg:overflow-hidden">
      <div className="bg-white mx-4 lg:mx-0 mt-6 w-[800px] lg:w-full h-[300px] rounded-lg shadow-md hover:translate-y-[2px]">
        <h2 className="p-4 text-lg font-semibold">Last 5 transactions</h2>
        <table>
          <tr>
            <th className="w-full text-white bg-gray-800 ">Transaction ID</th>
            <th className="w-full text-white bg-gray-800 ">Amount</th>
            <th className="w-full text-white bg-gray-800 ">Duration</th>
            <th className="w-full text-white bg-gray-800 ">Repayables</th>
            <th className="w-full text-white bg-gray-800 ">Status</th>
            <th className="w-full text-white bg-gray-800 ">TimeStamp</th>
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
        {!data.length && (
          <>
            <div className="border-b"> </div>
            <h5 className="flex items-center justify-center h-[80px]">
              No transactions
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
