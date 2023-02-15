import React from 'react';
import './InfoPricing.css';

const InfoPricing = () => {
  return <React.Fragment>
    <div  className="fl_left info-div">
          <h1 className='info-h1'>
            Simple & Fair Pricing
          </h1>
          <p className='info-p'>
            Quick Credit offers a super-fast loan solution without paperwork and
            no delay to meet your urgent financial needs within 24 hours.
          </p>
          <button id="startBtn" >
            <a href="register.html" className='startbtn-a'
              >Get Started</a>
          </button>
        </div>
  </React.Fragment>
}

export default InfoPricing
