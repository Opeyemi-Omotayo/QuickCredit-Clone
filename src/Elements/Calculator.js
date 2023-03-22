import React, {useState} from "react";
import { AiOutlineCheck } from "react-icons/ai";

import "./Calculaator.css";

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
      <div className="fl_right formDiv">
        <form className="formDiv-form">
          <div>
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="text"
              className="input-calculator"
              id="loanAmount"
              name= "loanAmount"
              placeholder="Enter Amount"
              onChange={handleChange}
            />
          </div>
          <div className="formDiv-div">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              className="input-calculator"
              id="duration"
              name="duration"
              placeholder="0"
              onChange={handleDurationChange}
            />
          </div>
        </form>
        <div className="formDiv-div2">
          <section className="formDiv-sec">
            <div className="fl_left">
              <h5>YOU'LL PAYBACK</h5>
              <p id="calc">{"₦" + (+amount + (duration * 10) ) + ".00"} ----- {newDate}</p>
            </div>
          </section>

          <div className="formDes">
            <p className="formDes-p">
              Free automatic settlement between 24 hours
              <AiOutlineCheck />
            </p>
            <p className="formDes-p">
              No hidden fees or charges
              <AiOutlineCheck />
            </p>
            <p className="formDes-p">
              Zero integration fee
              <AiOutlineCheck />
            </p>
            <p className="formDes-p">
              Zero maintenance fee
              <AiOutlineCheck />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calculator;
