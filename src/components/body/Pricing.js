import React from 'react';
import Calculator from '../../Elements/Calculator';
import InfoPricing from '../../Elements/InfoPricing';

const Pricing = () => {
  return <React.Fragment>
    <div className="bg-blue-950 font-mono mt-[8rem] h-full lg:h-[30rem] flex flex-col justify-between lg:flex-row px-[2rem] lg:px-[7rem] " data-aos="fade-up">
        <InfoPricing />
        <Calculator />
    </div>
  </React.Fragment>
}

export default Pricing
