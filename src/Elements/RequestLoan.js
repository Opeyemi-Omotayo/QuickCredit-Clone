import React from 'react';
import SideDrawer from './SideDrawer';
import ImageUpload from './ImageUpload';
import Input from './Input';
import { VALIDATOR_REQUIRE } from '../Validation/Validators';
import { useForm } from '../hooks/form-hook';
import { ToastContainer, toast } from 'react-toastify';


const RequestLoan = () => {
  const [formState, inputHandler, setFormData] = useForm(
    {
      loanAmount: {
        value: "",
        isValid: false,
      },
      duration: {
        value: "",
        isValid: false,
      },
      image: {
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

  const submitHandler = async(e) => {
    e.preventDefault();
   
    const repayables = +formState.inputs.loanAmount.value + (formState.inputs.duration.value * 10);

      const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/users/loanrequests",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        loan_amount: formState.inputs.loanAmount.value,
        duration: formState.inputs.duration.value,
        repayable_amount: repayables,
        created_at: new Date().toLocaleString() ,
        status: "pending"
      }),
  });
  toast('Loan request sent successfully!');
  
}
  
    
   
  return <React.Fragment>
    <SideDrawer />
    <ToastContainer />
    <div className="container">
        <form action="" className="myform" style={{backgroundColor:"white"}} onSubmit={submitHandler}>
          <div class="modalText">
            <strong>Loan Request</strong>
          </div>
          <Input
            id="loanAmount"
            element="input"
            type="number"
            label="Loan Amount"
            placeholder="Loan Amount"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter the loan amount"
            onInput={inputHandler}
          /> 
           <Input
            id="duration"
            element="input"
            type="number"
            label="Duration"
            placeholder="Phone Number"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter the duration"
            onInput={inputHandler}
          /> 
          <div>
            <label className="label-img">Bank Statement(Up to six(6) months)</label>
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
            REQUEST LOAN
          </button>
        </form>
        <div className="single-card-loan-details">
          <h2>Loan Details</h2>
            <div style={{ display:'flex'}}>
              <h4>Loan Amount</h4>
            <h4 className='span-loan'>{"₦" + formState.inputs.loanAmount.value + ".00"}</h4>
            </div>
            <div style={{ display:'flex'}}>
              <h4>Duration</h4>
            <h4 className='span-loan'>{formState.inputs.duration.value + "days"}</h4>
            </div>
            <div style={{ display:'flex'}}>
              <h4>Repayable Amount</h4>
            <h4 className='span-loan'>{"₦" + (+formState.inputs.loanAmount.value + (formState.inputs.duration.value * 10)) + ".00"}</h4>
            </div>
          </div>
        </div>
    </React.Fragment>
}

export default RequestLoan
