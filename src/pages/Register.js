import React from "react";
import Img from "../components/Images/Register.svg";
import ImageUpload from "../Elements/ImageUpload";

import "./Register.css";

const Register = () => {
  return (
    <React.Fragment>
      <img src={Img} alt="Register-img" className="box-img-logo" />
      <div className=" box-register">
        <form action="" className="myform">
          <div className="alert">Registraion Successful</div>
          <div class="modalText">
            <strong>Let’s get you started with your QuickCredit Account</strong>
          </div>
          <div>
            <label>Username</label>
            <input className="username" type="text" placeholder="username" />
          </div>
          <div>
            <label>Name</label>
            <input className="fullName" type="text" placeholder="Full Name" />
          </div>
          <div>
            <label>Email</label>
            <input className="email" type="email" placeholder="Email Address" />
          </div>
          <div>
            <label>Phone Number(Linked with BVN)</label>
            <input className="number" type="text" placeholder="Phone Number" />
            <div className="error hidden">
              Please enter a valid phone number
            </div>
          </div>
          <div className="modal-pin">
            <label>Pin</label>
            <input className="password" type="password" placeholder="pin" />
          </div>
          <label className="label-img">Identification Document</label>
          <ImageUpload
              center
              id="image"
            />
          <button className="registerButton">
            Get Started
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
