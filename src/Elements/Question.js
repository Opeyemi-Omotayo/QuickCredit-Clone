import React, {useState} from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./Question.css";

const Question = (props) => {
  const [flag, setFlag] = useState(false);

  const showFAQsHandler = () => {
    setFlag(true);
    
  };

  return (
    <React.Fragment>
      <div className="questions" key={props.id}>
        <p className="FAQs" onClick={showFAQsHandler}>
          {props.text}
          <AiOutlinePlus className="showFAQs fl_right" />
        </p>
      {flag && <p className="FAQsHide1">{props.answer}</p>}
      </div>
    </React.Fragment>
  );
};

export default Question;
