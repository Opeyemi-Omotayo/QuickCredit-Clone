import React , { useContext}from 'react';
import { useHistory } from 'react-router-dom';

import Img from "../components/Images/Register.svg";
import Input from '../Elements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../Validation/Validators';
import { useForm } from '../hooks/form-hook';
import { AuthContext } from "../context/auth-context";
import { useHttp } from "../hooks/http-hook";
import LoadingSpinner from '../Elements/LoadingSpinner';
import ErrorModal from '../Elements/ErrorModal';

import './Register.css';

const Login = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest , error, clearError} = useHttp();
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
    console.log('okkkk')
    event.preventDefault();
console.log(formState.inputs.email.value);
console.log(formState.inputs.password.value)

    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/login',
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
      history.push('/')
    } catch (err) {}
  }

  return <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
     <img src={Img} alt="Register-img" className="box-img-logo"/>
    <div className=" box-register">
    {isLoading && <LoadingSpinner asOverlay />}
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
