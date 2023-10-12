import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const [flag, setFlag] = useState(false);

  const showFAQsHandler = () => {
    setFlag(!flag);
  };

  return (
    <React.Fragment>
      <div className=" mx-[1rem] lg:mx-[11rem] xl:mx-[13rem] mb-4 text-xs md:text-sm" key={props.id}>
        <p className="flex items-center justify-between px-4 py-3 bg-white border border-green-600 rounded-lg shadow" onClick={showFAQsHandler}>
          {props.text}
          {!flag ? <AiOutlinePlus className="text-green-600" />: <AiOutlineMinus className="text-green-600"/>}
        </p>
        {flag && <p className="px-4 py-3 bg-green-300" data-aos="fade-in">{props.answer}</p>}
      </div>
    </React.Fragment>
  );
};

export default Question;
