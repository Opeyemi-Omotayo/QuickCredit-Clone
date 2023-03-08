import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Fig1 from "../components/Images/Fig1.svg";
import Fig2 from "../components/Images/Fig2.svg";
import Fig3 from "../components/Images/Fig3.svg";
import Fig4 from "../components/Images/Fig4.svg";
import "./WhyElement.css";

const WhyElement = () => {
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
      <div ref={myRef}>
        {isVisible && (
          <motion.div
            animate={{ x: 280 }}
            transition={{ type: "tween", duration: 1 }}
            className="boxContainer box-index animateStyle"
          >
            <div className="choose">
              <img src={Fig1} alt="fig1" />
              <h1>We're flexible</h1>
              <p>
                You can save interest by repaying your short term loan early. If
                things go wrong, we're here to help you.
              </p>
            </div>
            <div className="choose1">
              <img src={Fig2} alt="fig2" />
              <h1>We're committed to you</h1>
              <p>
                Easy navigation and user experience. Access to QuickCredit
                services with ease.
              </p>
            </div>
          </motion.div>
        )}
        {isVisible && (
          <motion.div
            animate={{ x: -280 }}
            transition={{ type: "tween", duration: 1 }}
            className="boxContainer box-size animateStyle2"
          >
            <div className="choose">
              <img src={Fig3} alt="fig3" />
              <h1>We're transparent</h1>
              <p>
                There are no hidden charges. We make all our fees completely
                clear upfront before you apply.
              </p>
            </div>
            <div className="choose1">
              <img src={Fig4} alt="fig4" />
              <h1>We're here to help</h1>
              <p>Get extensive details of requested loan facility real-time.</p>
            </div>
          </motion.div>
        )}
      </div>
    </React.Fragment>
  );
};

export default WhyElement;
