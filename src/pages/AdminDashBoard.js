import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./AdminDashBoard.css";
import { useHttp } from "../hooks/http-hook";
import LoadingSpinner from "../Elements/LoadingSpinner";
import { AuthContext } from "../context/auth-context";
import ToggleButton from "../Elements/ToggleButton";
import { AiOutlineLogout } from "react-icons/ai";

const AdminDashBoard = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttp();
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "/api/users/loanrequests", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
      });
  }, [auth.token]);

  const username = localStorage.getItem("user");

  const statusHandler = async (e) => {
    e.preventDefault();
    const requestId = e.currentTarget.id;

    const ACTION_STATES = {
      APPROVAL: "APPROVED",
      REJECTED: "REJECTED",
    };

    const newStatus = data.find((details) => details.id === requestId).status === ACTION_STATES.APPROVAL
      ? ACTION_STATES.REJECTED
      : ACTION_STATES.APPROVAL;

    const updatedData = data.map((details) =>
      details.id === requestId ? { ...details, status: newStatus } : details
    );
    setData(updatedData);

    await sendRequest(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/loanrequests/${requestId}`,
      "PATCH",
      JSON.stringify({
        status: newStatus,
      }),
      {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.token,
      }
    );
  };

  const logoutHandler = () => {
    history.push("/");
    auth.logout();
    
  };

  return (
    <React.Fragment>
      <h1 className="admin-intro">Welcome {username},</h1>
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="adminContainer">
        <h3 >Loan Request</h3>
        <table>
          <tr >
          <th className="header-row">User</th>
            <th className="header-row">Loan Amount</th>
            <th className="header-row">Duration</th>
            <th className="header-row">Repayables</th>
            <th className="header-row">Time Stamp</th>
            <th className="header-row">Status</th>
            <th className="header-row">{" "}</th>
          </tr>
          <tbody>
            {data.map((details) => {
              return (
                <tr key={details.id}>
                  <td>{details.username}</td>
                  <td>{details.loan_amount}</td>
                  <td>{details.duration_in_days} days</td>
                  <td>{details.repayable_amount}</td>
                  <td>{details.created_at} </td>
                  <td><ToggleButton  id={details.id}
                      onClick={statusHandler} checked={details.status === "APPROVED"}/></td>
                  <td>
                    <button
                      className="status"
                    
                    >
                      {details.status }
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <footer onClick={logoutHandler} className="log_right">
          <AiOutlineLogout className="icon" />
          <span>LOGOUT</span>
        </footer>
    </React.Fragment>
  );
};

export default AdminDashBoard;
