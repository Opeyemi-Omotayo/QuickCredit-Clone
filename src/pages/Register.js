import React from "react";

import { useForm } from "../hooks/form-hook";
import Img from "../components/Images/Register.svg";
import ImageUpload from "../Elements/ImageUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_PHONENUMBER,
  VALIDATOR_MINLENGTH,
} from "../Validation/Validators";
import "./Register.css";
import Input from "../Elements/Input";

const Register = () => {
  const [inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      number: {
        value: "",
        isValid: false,
      },
      pin: {
        value: "",
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      }
    },
    false
  );

  return (
    <React.Fragment>
      <img src={Img} alt="Register-img" className="box-img-logo" />
      <div className=" box-register">
        <form action="" className="myform">
          <div className="alert">Registraion Successful</div>
          <div class="modalText">
            <strong>Let’s get you started with your QuickCredit Account</strong>
          </div>
          <Input
            id="username"
            element="input"
            type="text"
            label="Username"
            placeholder="Username"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a Username."
            onInput={inputHandler}
          />
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            placeholder="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your full name"
            onInput={inputHandler}
          />
          <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Email Address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your correct email address"
            onInput={inputHandler}
          />
          <Input
            id="number"
            element="input"
            type="number"
            label="Phone Number(Linked with BVN)"
            placeholder="Phone Number"
            validators={[VALIDATOR_PHONENUMBER(11)]}
            errorText="Please enter your correct phone number"
            onInput={inputHandler}
          />
          <Input
            id="pin"
            element="input"
            type="password"
            label="Pin"
            placeholder="Pin"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a password"
            onInput={inputHandler}
          />
          <label className="label-img">Identification Document</label>
          <ImageUpload center id="image" onInput={inputHandler} errorText="Please provide an image."/>
          <button className="registerButton" >
            Get Started
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
