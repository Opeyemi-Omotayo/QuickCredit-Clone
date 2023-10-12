import React from "react";
import WhyElement from "../../Elements/WhyElement";

const WhyUs = () => {
  return (
    <React.Fragment>
      <section
        id="whyUs"
        className="font-mono mx-[4rem] lg:mx-[11rem] xl:mx-[13rem]"
        data-aos="fade-up"
      >
        <h1 className="flex items-center justify-center my-[5rem] font-bold text-2xl ">
          Why Choose Us
        </h1>
        <WhyElement />
      </section>
    </React.Fragment>
  );
};

export default WhyUs;
