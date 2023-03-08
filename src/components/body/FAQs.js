import React from "react";
import Question from "../../Elements/Question";

const FAQs = () => {
  return (
    <React.Fragment>
      <section id="faqs">
        <h2 className="boxHead">FAQs</h2>
        <h1 className="boxHead2">Frequently Asked Questions</h1>
        <div className="FAQsDiv">
          <Question id="1" text=" Q1. I’m receiving an error: “Enable Geolocation”. How do I resolve this?"/>
          <Question id="2" text="Q2. I don’t know my BVN. What do I do?" />
          <Question id="3" text="Q3. How long does it take to process a Quick Credit loan?" />
          <Question id="4" text=" Q4. Is Quick Credit a bank? Where are you located?" />
          <Question id="5" text=" Q5. Why is my Bank Verification Number (BVN) required?" />
          <Question id="6 " text="Q6. How do I apply?" />
          <Question id="7" text=" Q7. Who should I contact to submit a comment, question or complaint?" />
          <Question id="8" text="Q8. My current loan offer is too small! Can I get a higher loan amount?" />
          <Question id="9" text=" Q9. I have submitted my application but I have not yet received any notification on my loan status?" />
          <Question id="10" text="Q10. Why was my loan application rejected?" />
          <Question id="11" text=" Q11. My loan status shows ‘Disbursed’, but I am yet to receive funds in my account?" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default FAQs;
