import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';

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
import { AuthContext } from "../context/auth-context";
import { useHttp } from "../hooks/http-hook";
import LoadingSpinner from "../Elements/LoadingSpinner";
import ErrorModal from "../Elements/ErrorModal";
import { Link } from "react-router-dom";


const Register = () => {
  const history = useHistory();
  const [number, setNumber] = useState();
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttp();

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

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", formState.inputs.username.value);
      formData.append("name", formState.inputs.name.value);
      formData.append("email", formState.inputs.email.value);
      formData.append("number", number);
      formData.append("password", formState.inputs.password.value);
      formData.append("image", formState.inputs.image.value);
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/registration",
        "POST",
        formData
      );
      console.log(formState.inputs.number.value);
      history.push("/app/users/verification");
      auth.login(responseData.userId, responseData.token);
    } catch (err) {
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <img src={Img} alt="Register-img" className="box-img-logo" />
      <div className=" box-register">
        {isLoading && <LoadingSpinner asOverlay />}
        <form action="" className="myform" onSubmit={submitHandler}>
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
           <div className="phone-input">
           <PhoneInput value={number}  onChange={setNumber} countries={["NG"]} defaultCountry={"NG"} />
            </div>
           {/* <Input
            id="number"
            element="input"
            type="number"
            label="Phone Number(Linked with BVN)"
            placeholder="Phone Number"
            validators={[VALIDATOR_PHONENUMBER(11)]}
            errorText="Please enter your correct phone number"
            onInput={inputHandler}
          /> */}
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
          <button
            type="submit"
            className="registerButton"
           
          >
            SIGNUP
          </button>
          <Link
            onClick={switchModeHandler}
            to="/app/users/login"
            className="shuttleBtn"
          >
            SWITCH TO LOGIN
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
