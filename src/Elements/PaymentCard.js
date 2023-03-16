import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentCard = () => {
  const addCardHandler = () => {
toast("Coming Soon!");
  }

  return (
    <React.Fragment>
      <ToastContainer />
    <div className="container">
      <div className="single-card-loan payment-card">
        <h2>My Card(0)</h2>
        <p>You have not added a card yet</p>
        <button onClick={addCardHandler}>Add Card</button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default PaymentCard;
