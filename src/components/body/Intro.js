import React from "react";

const Intro = () => {

  return (
    <React.Fragment>
      <div className="flex items-center justify-center px-[3rem] pt-[5rem] font-mono bg-primary">
        <div className="flex flex-col items-center justify-center">
          <h1 className="flex flex-col mb-8 text-2xl font-extrabold md:text-4xl lg:text-5xl"><span className="flex items-center justify-center">Getting loans just</span> <span className="flex items-center justify-center">got easier</span></h1>
          <p className="flex flex-col mb-8 text-xs w-[90%] lg:w-[50%] text-center md:text-sm lg:text-lg" >
            Apply for up to ₦100,000 with loan tenors up to 90days and have your money sent straight to your bank account in minutes.
          </p>         
            <img
              src="https://quickcredit.com.ng/static/media/iphone-x.dad475a3.png"
              alt="iphone"
              className="w-[250px] md:w-[300px] lg:w-[320px]"
              data-aos="fade-in"
            />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
