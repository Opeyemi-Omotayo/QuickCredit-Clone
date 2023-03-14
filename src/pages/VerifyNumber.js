import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http-hook";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';

import LoadingSpinner from "../Elements/LoadingSpinner";
import Img from "../components/Images/Register.svg";
import { setUpRecaptcha } from "../context/auth-context";

const VerifyNumber = () => {
  const { isLoading } = useHttp();
  const history = useHistory();
  const [number, setNumber] = useState();
  

  const getOtpHandler = async(e) => {
    console.log("llll");
    e.preventDefault();
    try {
      const response = await setUpRecaptcha(number);
      console.log(response);
    } catch (error) {
      
    }
  };

  const cancelHandler = (e) => {
e.preventDefault();
history.push("/app/users/registration");
  }

  return (
    <React.Fragment>
      <img src={Img} alt="Register-img" className="box-img-logo" />
      <div className=" box-register">
        {isLoading && <LoadingSpinner asOverlay />}
        <form action="" className="myform" onSubmit={getOtpHandler}>
          <div className="login-head">
            <h1 className="login-p">Confirm and verify your number,</h1>
          </div>
          <div className="input-verify">
           <PhoneInput value={number}  onChange={setNumber} countries={["NG"]} defaultCountry={"NG"} />
            </div>
          <input type="number" placeholder="Enter OTP" className="input-verify" />
          <div id="recaptcha-container" />
          <button className="btn-left" onClick={cancelHandler}>CANCEL</button>
          <button className="btn-right" onClick={getOtpHandler}>SEND OTP</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default VerifyNumber;
