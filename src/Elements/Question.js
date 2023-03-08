import React, {useState} from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./Question.css";

const Question = (props) => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="questions" key={props.id}>
        <p className="FAQs">
          {props.text}
          <AiOutlinePlus className="showFAQs fl_right" />
        </p>
       <p className="FAQsHide1">i can do ir</p>
      </div>
    </React.Fragment>
  );
};

export default Question;
