import React from 'react';
import Img from "../components/Images/FigDiv.svg";
import Img2 from "../components/Images/FigDiv2.svg";
import Img4 from "../components/Images/FigDiv4.svg";
import "./DashBoardDivs.css";

const DashBoardDivs = () => {
  return <React.Fragment>
    <div className="container">
      <div className="single-card">
      <img src={Img} alt="fund wallet"/>
        <h3>Fund Wallet</h3>
      </div>
   
    <div className="single-card">
        <img src={Img2}  alt="transfer"/>
        <h3>Transfer/Withdraw</h3>
    </div>
    <div className="single-card">
        <img src={Img4} alt="bills"/>
        <h3>Pay Bills</h3>
    </div>
    </div>
  </React.Fragment>
}

export default DashBoardDivs;
