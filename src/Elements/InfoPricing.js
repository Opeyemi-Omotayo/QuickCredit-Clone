import React from "react";
import { Link } from "react-router-dom";
import "./InfoPricing.css";

const InfoPricing = () => {
  return (
    <React.Fragment>
      <div className="fl_left info-div">
        <h1 className="info-h1">Simple & Fair Pricing</h1>
        <p className="info-p">
          Quick Credit offers a super-fast loan solution without paperwork and
          no delay to meet your urgent financial needs within 24 hours.
        </p>
        <button id="startBtn">
          <Link to='/app/register' className="startbtn-a">
            Get Started
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default InfoPricing;
