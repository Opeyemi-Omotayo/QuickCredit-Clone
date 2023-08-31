import React, {useState} from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Calculator = () => {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");

  const newDate = new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toDateString();

  const handleChange = (e) => {
setAmount(e.target.value);
//setDuration(e.target.value);

  }

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  }

  return (
    <React.Fragment>
      <div className=" font-mono text-gray-100 w-full lg:w-[55%] bg-blue-800 h-[33rem] mt-[2rem] lg:mt-[-3rem]  rounded-md p-10">
        <form className="">
          <div className="flex flex-col mb-6">
            <label htmlFor="loanAmount" className="font-semibold">Loan Amount</label>
            <input
              type="text"
              className="p-4 text-white rounded-md outline-none bg-blue-950"
              id="loanAmount"
              name= "loanAmount"
              placeholder="Enter Amount"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="duration" className="font-semibold">Duration</label>
            <input
              type="text"
              className="p-4 text-white rounded-md outline-none bg-blue-950"
              id="duration"
              name="duration"
              placeholder="0"
              onChange={handleDurationChange}
            />
          </div>
        </form>
       
          <section className="my-9">
              <h5>YOU'LL PAYBACK</h5>
              <p id="calc">{"₦" + (+amount + (duration * 10) ) + ".00"} ----- {newDate}</p>
          </section>

          <div>
            <p className="flex items-center my-4">
              Free automatic settlement between 24 hours
              <AiOutlineCheck className="ml-4"/>
            </p>
            <p className="flex items-center mb-4">
              No hidden fees or charges
              <AiOutlineCheck className="ml-4"/>
            </p>
            <p className="flex items-center mb-4">
              Zero integration fee
              <AiOutlineCheck className="ml-4"/>
            </p>
            <p className="flex items-center mb-4">
              Zero maintenance fee
              <AiOutlineCheck className="ml-4"/>
            </p>
          </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
