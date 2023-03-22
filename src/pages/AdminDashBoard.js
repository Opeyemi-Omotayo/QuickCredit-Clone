import React from 'react'; 
import TransactionHistory from '../Elements/TransactionHistory';

const AdminDashBoard = () => {
 const username = localStorage.getItem("user");

  return <React.Fragment>
    <h1>HELLO {username}</h1> 

    <TransactionHistory />
  </React.Fragment>
}

export default AdminDashBoard;
