import React , {useState} from "react";
import { useHttp } from "../hooks/http-hook";
import { VALIDATOR_PHONENUMBER } from "../Validation/Validators";
import Input from "../Elements/Input";

import LoadingSpinner from "../Elements/LoadingSpinner";
import Img from "../components/Images/Register.svg";
import { useForm } from "../hooks/form-hook";


const VerifyNumber = () => {
    const [number, setNumber] = useState();
  const { isLoading } = useHttp();
  const [ inputHandler] = useForm(
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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <React.Fragment>
      <img src={Img} alt="Register-img" className="box-img-logo" />
      <div className=" box-register">
        {isLoading && <LoadingSpinner asOverlay />}
        <form action="" className="myform" onSubmit={submitHandler}>
          <div className="login-head">
            <h1 className="login-p">Verify your number,</h1>
          </div>
         
<input type="number" className="input-verify"/>
          <button className="btn-right">CANCEL</button>
          <button className="btn-left" >SEND OTP</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default VerifyNumber;
