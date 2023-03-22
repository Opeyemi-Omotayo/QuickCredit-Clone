import React, {useState} from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./Question.css";

const Question = (props) => {
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);
  const [answer, setAnswer] = useState("");

  const showFAQsHandler = () => {
     //document.querySelector(`.FAQsHide1`).style.display ='block';
     //document.querySelector(`.FAQsHide1`).innerHTML = "i will do it";
     //console.log(id)
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
