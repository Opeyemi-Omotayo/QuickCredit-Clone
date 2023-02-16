import React from "react";
import Fig1 from "../components/Images/Fig1.svg";
import Fig2 from "../components/Images/Fig2.svg";
import Fig3 from "../components/Images/Fig3.svg";
import Fig4 from "../components/Images/Fig4.svg";
import "./WhyElement.css";

const WhyElement = () => {
  return (
    <React.Fragment>
      <div class="boxContainer box-index">
        <div class="choose">
          <img src={Fig1} alt="fig1" />
          <h1>We're flexible</h1>
          <p>
            You can save interest by repaying your short term loan early. If
            things go wrong, we're here to help you.
          </p>
        </div>
        <div class="choose1">
          <img src={Fig2} alt="fig2" />
          <h1>We're committed to you</h1>
          <p>
            Easy navigation and user experience. Access to QuickCredit services
            with ease.
          </p>
        </div>
      </div>
      <div class="boxContainer box-size">
        <div class="choose">
          <img src={Fig3} alt="fig3" />
          <h1>We're transparent</h1>
          <p>
            There are no hidden charges. We make all our fees completely clear
            upfront before you apply.
          </p>
        </div>
        <div class="choose1">
          <img src={Fig4} alt="fig4" />
          <h1>We're here to help</h1>
          <p>Get extensive details of requested loan facility real-time.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyElement;
