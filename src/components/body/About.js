import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div id="about" className="font-mono" data-aos="fade-up">
        <div className="mx-[1rem] my-[2rem] lg:mx-[3rem] lg:my-[4rem] pl-4 md:pr-0 pr-4 md:pl-6 bg-white rounded shadow flex flex-col md:flex-row items-center justify-between">
          <div className="mr-4 ">
            <h2 className="mt-4 mb-4 text-2xl font-bold md:text-3xl xl:text-4xl lg:mt-0">ABOUT US</h2>
            <p className="text-sm lg:text-lg">
              Quick credit is a simple, technologically deployed lending
              platform that provide micro loans for short- terms duration to
              help meet and cover unexpected emergency expenses and urgent cash
              needs.
            </p>
          </div>

          <div className="mt-5 md:mt-0 bg-primary h-[265px] ">
            <figure >
              <img
                src="https://quickcredit.com.ng/static/media/About-Us-Illustration.4b3f1880.png"
                alt="about"
                className="mt-[-2rem] md:mt-0"
              />
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
