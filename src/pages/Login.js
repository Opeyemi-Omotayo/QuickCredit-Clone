import React , { useContext}from 'react';

import Img from "../components/Images/Register.svg";
import Input from '../Elements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../Validation/Validators';
import { useForm } from '../hooks/form-hook';
import { AuthContext } from "../context/auth-context";
import { useHttp } from "../hooks/http-hook";

import './Register.css';

const Login = () => {
  const auth = useContext(AuthContext);
  const {  sendRequest } = useHttp();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      pin: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  const submitHandler =async (event) =>{
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + '/users/login',
        'POST',
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      auth.login(responseData.userId, responseData.token);
    } catch (err) {}
  }

  return <React.Fragment>
     <img src={Img} alt="Register-img" className="box-img-logo"/>
    <div className=" box-register">
      <form action="" className="myform" onSubmit={submitHandler}>
        <div className="alert">Registraion Successful</div>
        <div className='login-head' >
          <h1 className='login-p'>Welcome Back,</h1>
          <small className='login-small'>Sign in to continue</small>
        </div>
        <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your correct email address"
            onInput={inputHandler}
          />
          <Input
            id="pin"
            element="input"
            type="password"
            label="Pin"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a password"
            onInput={inputHandler}
          />
        <button className="registerButton" >LOG IN</button>
      </form>
    </div>

  </React.Fragment>
}

export default Login
