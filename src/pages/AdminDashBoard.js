import React, { useEffect, useState, useContext} from 'react'; 
import  "./AdminDashBoard.css";
import { useHttp } from '../hooks/http-hook';
import LoadingSpinner from "../Elements/LoadingSpinner";
import { AuthContext} from "../context/auth-context";

const AdminDashBoard = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest} = useHttp();
  const [data, setData] = useState([]);
  //const requestId = useParams().id;

  useEffect(() => {
    fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/getAllLoanRequests",{
      method: "GET",
      })
    .then((res)=> res.json())
    .then(data => {
      setData(data.users);
    })
  },[]);

 const username = localStorage.getItem("user");


 const statusHandler = async (e) => {
  e.preventDefault();
  const requestId = e.currentTarget.id;
  const ACTION_STATES = {
    APPROVAL: "APPROVED",
    REJECTED: "REJECTED"
  }

    await sendRequest(
      `${process.env.REACT_APP_BACKEND_URL}/users/loanrequest/${requestId}`,
      'PATCH',
      JSON.stringify({
        status: ACTION_STATES.APPROVAL
      }),
      {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token
      }
    );
 }

  return <React.Fragment>
    <h1 className='admin-intro'>Welcome {username},</h1> 
    {isLoading && <LoadingSpinner asOverlay />}
    <div className='adminContainer'>
     <h3>Loan Request</h3>
     <table>
      <tr>
        <th>Loan ID</th>
        <th>Loan Amount</th>
        <th>Duration</th>
        <th>Repayables</th>
        <th>Image</th>
        <th>created At</th>
        <th>Status</th>
      </tr>
      <tbody>
      {data.map(details => {
        return <tr key={details.id}>
          <td>{details.id}</td>
          <td>{details.loan_amount}</td>
          <td>{details.duration} days</td>
          <td>{details.repayable_amount}</td>
          <td>{details.image}</td>
          <td>{details.created_at} </td>
          <td><button className='status' id={details.id} onClick={statusHandler}>{details.status}</button></td>
        </tr>
      })}
     </tbody>
     </table>
    </div>
  </React.Fragment>
}

export default AdminDashBoard;
