import React from 'react';
import Img from "../components/Images/Register.svg";

import './Register.css';

const Login = () => {
  return <React.Fragment>
     <img src={Img} alt="Register-img" />
    <div className=" box-register">
      <form action="" className="myform" >
        <div className="alert">Registraion Successful</div>
        <div className="modalText" >
          <strong></strong>
        </div>
        <div class="modalText">
          <label>Email</label>
          <input className="login" type="email" placeholder="Email Address" />
        </div>
        <div className="modal-pin">
          <label>Pin</label>
          <input  className="login" type="password"  placeholder="pin" />
        </div>
        <button class="registerButton" >Get Started</button>
      </form>
    </div>

  </React.Fragment>
}

export default Login
