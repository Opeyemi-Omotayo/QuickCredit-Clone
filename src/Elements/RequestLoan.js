import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import Input from "./Input";
import { VALIDATOR_REQUIRE } from "../Validation/Validators";
import { useForm } from "../hooks/form-hook";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../context/auth-context";

const RequestLoan = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
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

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/users/loanrequests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        },
        body: JSON.stringify({
          loan_amount: +formState.inputs.loanAmount.value,
          duration_in_days: +formState.inputs.duration.value,
          status: "pending",
        }),
      }
    );
    
    history.push("/app/users/dashboard");
    toast("Loan request sent successfully!");
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="flex flex-col items-start justify-between m-8 md:flex-row ">
        <form
          action=""
          className="p-8 bg-white rounded-md shadow-md w-full md:w-[49%]"
          style={{ backgroundColor: "white" }}
          onSubmit={submitHandler}
        >
          <div class="text-xl font-semibold pb-4">
            <h1>Loan Request</h1>
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
            placeholder="Duration"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter the duration"
            onInput={inputHandler}
          />
          <div>
            <label >
              Bank Statement(Up to six(6) months)
            </label>
            <ImageUpload
              center
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
            />
          </div>
          <div className="flex items-end justify-end mt-2">
          <button type="submit" className="px-4 py-3 text-white bg-green-600 rounded-md shadow-md">
            REQUEST LOAN
          </button>
          </div>
        </form>
        <div className="p-8 bg-white rounded-md shadow-md mt-6 md:mt-0 w-full md:w-[47%]">
          <h2 className="pb-6 text-xl font-semibold">Loan Details</h2>
          <div className="flex items-center justify-between pb-4">
            <h4>Loan Amount</h4>
            <h4 className="span-loan">
              {"₦" + formState.inputs.loanAmount.value + ".00"}
            </h4>
          </div>
          <div className="flex items-center justify-between pb-4">
            <h4>Duration</h4>
            <h4 className="span-loan">
              {formState.inputs.duration.value + "days"}
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <h4>Repayable Amount</h4>
            <h4 className="span-loan">
              {"₦" +
                (+formState.inputs.loanAmount.value +
                  formState.inputs.duration.value * 10) +
                ".00"}
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequestLoan;
