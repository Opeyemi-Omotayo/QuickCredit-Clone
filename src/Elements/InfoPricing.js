import React from "react";
import { Link } from "react-router-dom";
//import "./InfoPricing.css";

const InfoPricing = () => {
  return (
    <React.Fragment>
      <div className="w-full lg:w-[37%] flex flex-col justify-center  text-white mr-[4rem] mt-8 lg:mt-0">
        <h1 className="text-4xl font-semibold lg:text-5xl ">Simple & Fair Pricing</h1>
        <p className="py-8 text-sm text-gray-100 lg:text-lg">
          Quick Credit offers a super-fast loan solution without paperwork and
          no delay to meet your urgent financial needs within 24 hours.
        </p>
        <button className="flex items-start ">
          <Link to='/app/register' className="px-6 py-4 font-semibold border border-white rounded-lg hover:bg-white hover:text-blue-900">
            Get Started
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default InfoPricing;
