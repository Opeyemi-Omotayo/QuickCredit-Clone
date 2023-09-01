import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import jwt from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";

import Img from "../components/Images/Register.svg";
import Input from "../Elements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../Validation/Validators";
import { useForm } from "../hooks/form-hook";
import { useHttp } from "../hooks/http-hook";
import LoadingSpinner from "../Elements/LoadingSpinner";
import { AuthContext } from "../context/auth-context";
import Button from "../Elements/Button";

const Login = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, sendRequest, error } = useHttp();
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
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/api/users/login",

        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );

      const user = jwt(responseData.token);
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("id", user.userId);
      localStorage.setItem("user", user.username);
      if (user.role === "admin") {
        history.push("/app/users/admin");
      } else {
        history.push("/app/users/dashboard");
      }
      auth.login(user.userId, responseData.token);
    } catch (err) {
      toast(error);
    }
  };

  const homeHandler = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center font-mono h-[100vh]">
      <img
        src={Img}
        alt="Register-img"
        className="w-[70px] h-[70px] mb-[1.5rem]"
        onClick={homeHandler}
      />
        <div className="w-[80%] md:w-[60%] lg:w-[40%] bg-white rounded-md shadow-md">
          {isLoading && <LoadingSpinner asOverlay />}
          <form action="" className="p-8" onSubmit={submitHandler}>
            <div className="pb-6">
              <h1 className="text-2xl font-bold">Welcome Back,</h1>
              <small className="text-sm">Sign in to continue</small>
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
            <Button disabled={!formState.isValid}>LOG IN</Button>
            <Link
              onClick={switchModeHandler}
              to="/app/users/registration"
              className="text-xs md:text-sm hover:text-green-600"
            >
              SWITCH TO SIGNUP
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
