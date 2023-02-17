import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import "./Calculaator.css";

const Calculator = () => {
  return (
    <React.Fragment>
      <div className="fl_right formDiv">
        <form className="formDiv-form">
          <div>
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="text"
              id="loanAmount"
              name= "loanAmount"
              placeholder="Enter Amount"
            />
          </div>
          <div className="formDiv-div">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              placeholder="0"
            />
          </div>
        </form>
        <div className="formDiv-div2">
          <section className="formDiv-sec">
            <div className="fl_left">
              <h5>YOU'LL PAYBACK</h5>
              <p id="calc">₦0.00</p>
            </div>
            <div className="fl_right formDiv-sec-div"></div>
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
