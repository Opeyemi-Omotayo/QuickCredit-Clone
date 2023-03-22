import React, { useEffect, useState} from 'react'; 
import  "./AdminDashBoard.css";
import { useHttp } from '../hooks/http-hook';
import LoadingSpinner from "../Elements/LoadingSpinner";

const AdminDashBoard = () => {
  const { isLoading} = useHttp();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/getAllLoanRequests",{
      method: "GET",
      })
    .then((res)=> res.json())
    .then(data => {
      console.log(data, "loanrequests");
      setData(data.users);
    })
  },[]);

 const username = localStorage.getItem("user");

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
        <th>Repayable</th>
        <th>Image</th>
        <th>created At</th>
        <th>Status</th>
      </tr>
      {data.map(details => {
        return <tr>
          <td>{details.id}</td>
          <td>{details.loan_amount}</td>
          <td>{details.duration} days</td>
          <td>{details.repayable_amount}</td>
          <td>{details.image}</td>
          <td>{details.created_at} </td>
          <td className='status pending'>{details.status}</td>
        </tr>
      })}
     </table>
    </div>
  </React.Fragment>
}

export default AdminDashBoard;
