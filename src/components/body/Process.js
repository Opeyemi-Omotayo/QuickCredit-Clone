import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Process.css";

const Process = (props) => {
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
      <div className="process">
        <h2 className="boxHead">HOW IT WORKS</h2>
        <h1 className="boxHead2">Fast & Easy Application Process</h1>
        <div className="boxContainer" ref={myRef}>
          {isVisible && (
            <motion.div
              animate={{ x: 40 }}
              transition={{ type: "tween", duration: 1 }}
              className="box boxe"
            >
              <div className="box-img-div">
                <img
                  src="data:image/png;base64,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"
                  alt="create Account"
                  className="img-box"
                />
                <h1 className="box-p">Create Account</h1>
                <p>
                  Register through our website, our MoneyPal app or by chatting
                  Zee on Whatsapp
                </p>
              </div>
            </motion.div>
          )}
          <div className="box boxee">
            <div className="box-img-div">
              <img
                src="data:image/png;base64,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"
                alt="apply for loan"
                className="img-box"
              />
              <h1 className="box-p">Apply for a loan</h1>
              <p>
                Fill out our brief application form with your information and
                we’ll review your application within Five (5) minutes.
              </p>
            </div>
          </div>
          {isVisible && (
            <motion.div
              animate={{ x: -40 }}
              transition={{ type: "tween", duration: 1 }}
              className="box boxeee"
            >
              <div className="box-img-div">
                <img
                  src="data:image/png;base64,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"
                  alt="create Account"
                  className="img-box"
                />
                <h1 className="box-p">Receive funds</h1>
                <p>
                  Once approved, funds are typically received within 5 minutes.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Process;
