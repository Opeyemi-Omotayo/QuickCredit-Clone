import React from "react";
import { useHistory, Link } from "react-router-dom";
import jwt from "jwt-decode";

import Img from "../components/Images/Register.svg";
import Input from "../Elements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../Validation/Validators";
import { useForm } from "../hooks/form-hook";
import { useHttp } from "../hooks/http-hook";
import LoadingSpinner from "../Elements/LoadingSpinner";
import ErrorModal from "../Elements/ErrorModal";

import "./Register.css";

const Login = () => {
  const history = useHistory();
  const { isLoading, sendRequest, error, clearError } = useHttp();
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
        name: undefined,
        number: undefined,
        username: undefined,
        image: undefined,
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid
    );
  };

  const submitHandler = async (event) => {
    event.preventDefault();
   
    const responseData = await sendRequest(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
      "POST",
      JSON.stringify({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      }),
      {
        "Content-Type": "application/json",
      }
    );
    const user = jwt(responseData.token);
    localStorage.setItem("token", responseData.token);
    localStorage.setItem("user", user.username);
    if(user.role === "admin"){
    history.push("/app/users/admin");
    } else{
      history.push("/app/users/dashboard");
    }
  
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <img src={Img} alt="Register-img" className="box-img-logo" />
      <div className=" box-register">
        {isLoading && <LoadingSpinner asOverlay />}
        <form action="" className="myform" onSubmit={submitHandler}>
          <div className="login-head">
            <h1 className="login-p">Welcome Back,</h1>
            <small className="login-small">Sign in to continue</small>
          </div>
          <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Email Address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your registered email address"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter your registered password."
            onInput={inputHandler}
          />
          <button className="registerButton">LOG IN</button>
          <Link
            onClick={switchModeHandler}
            to="/app/users/registration"
            className="shuttleBtn"
          >
            SWITCH TO SIGNUP
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
