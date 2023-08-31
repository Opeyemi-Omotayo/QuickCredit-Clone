import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Fig1 from "../components/Images/Fig1.svg";
import Fig2 from "../components/Images/Fig2.svg";
import Fig3 from "../components/Images/Fig3.svg";
import Fig4 from "../components/Images/Fig4.svg";

const WhyElement = () => {
 

  return (
    <React.Fragment>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-[3rem]">
          <div className="flex flex-col items-center justify-center mb-[3rem] md:mb-0 mr-0 md:mr-4 w-full md:w-[43%]">
            <img src={Fig1} alt="fig1" className="w-[70px] h-[70px] mb-3"/>
            <h1 className="text-xl font-bold ">We're flexible</h1>
            <p>
              You can save interest by repaying your short term loan early. If
              things go wrong, we're here to help you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  w-full md:w-[43%]">
            <img src={Fig2} alt="fig2" className="w-[70px] h-[70px] mb-3"/>
            <h1 className="text-xl font-bold ">We're committed to you</h1>
            <p>
              Easy navigation and user experience. Access to QuickCredit
              services with ease.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center justify-center mb-[3rem] md:mb-0 mr-0 md:mr-4 w-full md:w-[43%]">
            <img src={Fig3} alt="fig3" className="w-[70px] h-[70px] mb-3" />
            <h1 className="text-xl font-bold ">We're transparent</h1>
            <p>
              There are no hidden charges. We make all our fees completely clear
              upfront before you apply.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[43%]">
            <img src={Fig4} alt="fig4" className="w-[70px] h-[70px] mb-3"/>
            <h1 className="text-xl font-bold ">We're here to help</h1>
            <p>Get extensive details of requested loan facility real-time.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyElement;
