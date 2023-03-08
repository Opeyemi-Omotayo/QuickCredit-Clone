import React, { useState, useRef, useEffect } from "react";
import IntroImg from "../Images/Into.svg";
import { motion } from "framer-motion";

import "./Intro.css";

const Intro = () => {
  const [isVisible, setIsVisible] = useState();
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <React.Fragment>
      <div className="div-back">
        <div className="introDiv">
          <h1 className="boldH1">Getting loans just got easier</h1>
          <p className="smallp" >
            Apply for up to ₦100,000 with loan tenors of up to 90days and have
            your money sent straight to your bank account in minutes.
          </p>
          <div ref={myRef}>
          {isVisible ? (
            <motion.img
              animate={{ y: -100 }}
              transition={{type: 'tween', duration: 1}}
              src="https://quickcredit.com.ng/static/media/iphone-x.dad475a3.png"
              alt="iphone"
              className="iphoneX"
            />
          ) : (
            <img
              src="https://quickcredit.com.ng/static/media/iphone-x.dad475a3.png"
              alt="iphone"
              className="iphoneX"
            />
          )}
          </div>
          
        </div>
        <img src={IntroImg} alt="intro" />
      </div>
    </React.Fragment>
  );
};

export default Intro;
