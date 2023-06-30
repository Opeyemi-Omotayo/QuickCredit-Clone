import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from "../firebase";

import { useForm } from "../hooks/form-hook";
import Img from "../components/Images/Register.svg";
import ImageUpload from "../Elements/ImageUpload";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH
} from "../Validation/Validators";
import "./Register.css";
import Input from "../Elements/Input";
import { useHttp } from "../hooks/http-hook";
import LoadingSpinner from "../Elements/LoadingSpinner";
import ErrorModal from "../Elements/ErrorModal";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from 'react-toastify';
import Button from "../Elements/Button";


const Register = () => {
  const history = useHistory();
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  const { isLoading, error, clearError } = useHttp();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    setFormData(
      {
        ...formState.inputs,
        name: {
          value: "",
          isValid: false,
        },
        number: {
          value: "",
          isValid: false,
        },
        username: {
          value: "",
          isValid: false,
        },
        image: {
          value: null,
          isValid: false,
        },
      },
      false
    );
  };

  const setUpRecaptcha = () => {

    const auth = getAuth();
   window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
}, auth);
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    if(!number){
      toast("Please enter phone number!");
    }
    setUpRecaptcha();
    let phoneNumber = number;
    let appVerifier = window.recaptchaVerifier;
    

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      
      window.confirmationResult = confirmationResult;
      setFlag(true);
      // ...
    }).catch((error) => {
    });
  };

  const onSubmitOtp =(e) => {
    e.preventDefault();
    let otpInput = otp;
    let optConfirm = window.confirmationResult;
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        let user = result.user;
        
      })
      .catch(function (error) {
        toast("Incorrect OTP");
      });

      const responseData = fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/users/registration",{
        method: "POST",
        body: JSON.stringify({
          username: formState.inputs.username.value,
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          number: number,
          password: formState.inputs.password.value,
          image: formState.inputs.image.value,
          role: "customer"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
    });
      history.push("/app/users/login");
  };
  

const cancelHandler = (e) => {
    e.preventDefault();
    history.push("/");
};

  return (
    <React.Fragment>
      <ToastContainer />
      <ErrorModal error={error} onClear={clearError} />
      <img src={Img} alt="Register-img" className="box-img-logo" onClick={cancelHandler} />
      <div className=" box-register">
        {isLoading && <LoadingSpinner asOverlay />}
       {!flag &&  <form action="" className="myform" onSubmit={onSignInSubmit} >
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
           <div className="input-verify">
           <PhoneInput value={number}  onChange={setNumber} countries={["NG"]} defaultCountry={"NG"} />
            </div>
           
           <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <div>
            <label className="label-img">Identification Document</label>
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
          </div>
           <div id="recaptcha-container" /> 
          <Button
            type="submit"
            disabled={!formState.isValid}
            onClick={onSignInSubmit}
           
          >
            SIGNUP
          </Button>
          <Link
            onClick={switchModeHandler}
            to="/app/users/login"
            className="shuttleBtn"
          >
            SWITCH TO LOGIN
          </Link>
        </form>}

        {flag && <form action="" className="myform" onSubmit={onSubmitOtp}  >
          <div className="login-head">
            <h1 className="login-p">Verify your Phone-number,</h1>
          </div>
          <input
            type="number"
            placeholder="Enter OTP"
            className="input-verify"
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn-left" onClick={cancelHandler}>
            CANCEL
          </button>
          <button className="btn-right">
            Verify OTP
          </button>
        </form> } 
      </div>
    </React.Fragment>
  );
};

export default Register;
