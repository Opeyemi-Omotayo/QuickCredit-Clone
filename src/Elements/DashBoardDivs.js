import React from "react";
import Img from "../components/Images/FigDiv.svg";
import Img2 from "../components/Images/FigDiv2.svg";
import Img4 from "../components/Images/FigDiv4.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashBoardDivs = () => {
  const requestServicesHandler = () => {
    toast("Coming soon!");
  };

  const username = localStorage.getItem("user");

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="mx-4 mb-6 lg:mx-0">
        <div>
          <h4 className="mb-8 mt-[-6rem] lg:mt-0 text-2xl font-semibold ">Welcome {username},</h4>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="flex items-center p-8 bg-white rounded-lg shadow-lg cursor-pointer hover:translate-y-[2px]"
            onClick={requestServicesHandler}
          >
            <img src={Img} alt="fund wallet" className="mr-2" />
            <h3>Fund Wallet</h3>
          </div>

          <div
            className="flex items-center p-8 bg-white rounded-lg shadow-lg cursor-pointer hover:translate-y-[2px]"
            onClick={requestServicesHandler}
          >
            <img src={Img2} alt="transfer" className="mr-2" />
            <h3>Transfer/Withdraw</h3>
          </div>
          <div
            className="flex items-center p-8 bg-white rounded-lg shadow-lg cursor-pointer hover:translate-y-[2px]"
            onClick={requestServicesHandler}
          >
            <img src={Img4} alt="bills" className="mr-2" />
            <h3>Pay Bills</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashBoardDivs;
