import React from "react";
import './About.css';

const About = () => {
    return <React.Fragment>
        <div id="about aboutUS" className="about top_layer">
      <div className="containerr">
          <div className="titlepage">
            <h2 className="text-about">
              ABOUT US
            </h2>
          </div>
          
          <div className="about_box">
            <div className=" d_flex">
              <div className="about_box_text">
                <p>
                  Quick credit is a simple, technologically deployed lending
                  platform that provide micro loans for short- terms duration to
                  help meet and cover unexpected emergency expenses and urgent
                  cash needs.
                </p>
              </div>
              <div className="about_box_img">
                <figure>
                  <img
                    src="https://quickcredit.com.ng/static/media/About-Us-Illustration.4b3f1880.png"
                    alt="#"
                    className="img-style"
                  />
                </figure>
              </div>
            </div> 
          </div>
        </div>
      </div>  
    </React.Fragment>
};

export default About;