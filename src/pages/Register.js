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
        fetch(
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
      })
      .catch(function (error) {
        toast("Incorrect OTP");
      });
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
      <div className="flex flex-col items-center justify-center font-mono">
      <img src={Img} alt="Register-img" className="w-[70px] h-[70px] my-[4rem]" onClick={cancelHandler} />
      <div className="w-[80%] md:w-[60%] lg:w-[40%] bg-white rounded-md shadow-md mb-[4rem]">
        {isLoading && <LoadingSpinner asOverlay />}
       {!flag &&  <form action="" className="p-8 " onSubmit={onSignInSubmit} >
          <div className="text-2xl font-bold">
            <h1>Let’s get you started with your QuickCredit Account</h1>
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
           <div className="mb-4">
           <PhoneInput value={number} className="p-4 bg-gray-100 rounded-md" onChange={setNumber} countries={["NG"]} defaultCountry={"NG"} />
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
            <label className="pb-8">Identification Document</label>
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
          </div>
           <div id="recaptcha-container" /> 
           <div className="p-4 ">
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
            className="pt-4 text-xs md:text-sm hover:text-green-600"
          >
            SWITCH TO LOGIN
          </Link>
           </div>
         
        </form>}

        {flag && <form action="" className="p-8" onSubmit={onSubmitOtp}  >
          <div className="pb-6">
            <h1 className="text-2xl font-bold">Verify your Phone-number,</h1>
          </div>
          <input
            type="number"
            placeholder="Enter OTP"
            className="w-full p-3 bg-gray-100 rounded-sm"
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className="flex items-center justify-between mt-6">
          <button className="px-6 py-4 text-white bg-green-600 rounded shadow" onClick={cancelHandler}>
            CANCEL
          </button>
          <button className="px-6 py-4 text-white bg-green-600 rounded shadow">
            Verify OTP
          </button>
          </div>
         
        </form> } 
      </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
