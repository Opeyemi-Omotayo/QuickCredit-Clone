import React from 'react';
import Img from "../components/Images/FigDiv.svg";
import Img2 from "../components/Images/FigDiv2.svg";
import Img4 from "../components/Images/FigDiv4.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DashBoardDivs.css";

const DashBoardDivs = () => {
  const requestServicesHandler = () => {
    toast('Coming soon!')
  };

  const username = localStorage.getItem("user");

  return <React.Fragment>
     <ToastContainer />
    <div className="container">
      <h4 className='intro-text'>Welcome {username},</h4>
    </div>
    <div className="container">
      <div className="single-card" onClick={requestServicesHandler}>
      <img src={Img} alt="fund wallet"/>
        <h3>Fund Wallet</h3>
      </div>
   
    <div className="single-card" onClick={requestServicesHandler}>
        <img src={Img2}  alt="transfer"/>
        <h3>Transfer/Withdraw</h3>
    </div>
    <div className="single-card" onClick={requestServicesHandler}>
        <img src={Img4} alt="bills"/>
        <h3>Pay Bills</h3>
    </div>
    </div>
  </React.Fragment>
}

export default DashBoardDivs;
