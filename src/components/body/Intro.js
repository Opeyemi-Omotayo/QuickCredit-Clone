import React from "react";
import IntroImg from "../Images/Into.svg";

import './Intro.css';

const Intro = () => {
  return (
    <React.Fragment>
      <div className="div-back" >
        <div className="introDiv">
          <h1 className="boldH1">Getting loans just got easier</h1>
          <p className="smallp">
            Apply for up to ₦100,000 with loan tenors of up to 90days and have
            your money sent straight to your bank account in minutes.
          </p>
          <img
            src="https://quickcredit.com.ng/static/media/iphone-x.dad475a3.png"
            alt="iphone"
            className="iphoneX"
          />
        </div>
        <img src={IntroImg} alt="intro" />
      </div>
    </React.Fragment>
  );
};

export default Intro;
