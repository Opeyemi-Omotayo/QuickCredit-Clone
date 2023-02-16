import React from 'react';
import Calculator from '../../Elements/Calculator';
import './Pricing.css';
import InfoPricing from '../../Elements/InfoPricing';

const Pricing = () => {
  return <React.Fragment>
    <div className="formDivContainer">
      <div className='formDiv-div'>
        <InfoPricing />
        <Calculator />
      </div>
    </div>
  </React.Fragment>
}

export default Pricing
