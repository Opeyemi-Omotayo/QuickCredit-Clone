import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./Question.css";

const Question = (props) => {
  return (
    <React.Fragment>
      <div className="questions">
        <p className="FAQs">
          {props.text}
          <AiOutlinePlus className="showFAQs fl_right"/>
        </p>
        <p class="FAQsHide1"></p>
      </div>
    </React.Fragment>
  );
};

export default Question;
