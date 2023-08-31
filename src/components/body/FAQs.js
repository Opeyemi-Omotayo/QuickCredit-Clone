import React from "react";
import Question from "../../Elements/Question";

const FAQs = () => {
  return (
    <React.Fragment>
      <section id="faqs" >
      <div className="flex flex-col items-center justify-center mb-[6rem] mt-[10rem]">
        <h2 className="text-sm font-semibold text-blue-900">FAQs</h2>
        <h1 className="text-xl font-bold lg:text-2xl">Frequently Asked Questions</h1>
      </div>
        <div>
          <Question id="1" text=" Q1. I’m receiving an error: “Enable Geolocation”. How do I resolve this?" answer="Please ensure that location settings on your mobile device or web browser."/>
         <Question id="2" text="Q2. I don’t know my BVN. What do I do?" answer="Just dial *565*0#.Please note: This will only work if you are making the request from the same phone number currently linked to your bank account"/>
          <Question id="3" text="Q3. How long does it take to process a Quick Credit loan?" answer="The entire process can be completed in no time! Once you complete our short application form and accept the loan offer provided, your information is reviewed, and a loan decision is typically provided within minutes. If approved, funds will be received within a few moments of the application process being completed.."/>
          <Question id="4" text=" Q4. Is Quick Credit a bank? Where are you located?" answer="No, Quick Credit is not a bank. We do not receive deposits from the general public nor do we offer savings or current accounts for now. Quick Credit a Micro Loan service provider by Lubeck capital Ltd (RC. 1044655), a Finance company licensed by AMFIN and regulated by the Central Bank of Nigeria. Even though we offer a service that is 100% online, you can still reach us whenever you need via our in-app live chat, telephone or any of our social media platforms. You can also visit our office location at no 43, Nurses House, Churchgate Street, Victoria Island Lagos."/>
          <Question id="5" text=" Q5. Why is my Bank Verification Number (BVN) required?" answer="We request your BVN as this is used to verify that the individual applying for a Quick Credit loan is the same as the owner of the provided bank account. This is to ensure that your details cannot be used to apply for a loan without your authorization in the event that a 3rd party has access to your account details. Please note: Your BVN does not provide access to your account. If in doubt, we encourage you to confirm this from your bank before you proceed"/>
          <Question id="6 " text="Q6. How do I apply?" answer="You can apply via our website, click on sign in if you already have an account, click on register if you are a new customer. Enter all required details,validate your card, then proceed to apply for a loan."/>
          <Question id="7" text=" Q7. Who should I contact to submit a comment, question or complaint?" answer="You can send us a message using our in-app chat service, and an agent will respond swiftly. You can also mail us on support@quickcredit.com.ng or call us on 080xxxxxxxxxx.Feel free to reach out to us any time via the in-app live chat or find us on social media (Facebook, Twitter, Instagram and LinkedIn). We will always do our best to attend to you as quickly as possible" />
          <Question id="8" text="Q8. My current loan offer is too small! Can I get a higher loan amount?" answer="Yes, you can. However, the loan offer displayed to you is what we can provide at the time of your application. This can increase in future as we learn more about you and there are records as to your repayments with us. If you still believe you require a higher amount and that you earn enough to access higher amounts; kindly mail us on support@quickcredit.com or call us on 080xxxxxxxxx"/>
          <Question id="9" text=" Q9. I have submitted my application but I have not yet received any notification on my loan status?" answer="Notifications are typically sent via SMS and/or email immediately after your loan application is sent. If you have not received either of these, please check the ‘Your Loans’ menu in the app to confirm the current status of your request." />
          <Question id="10" text="Q10. Why was my loan application rejected?" answer="There are a few reasons behind loan application rejections. The most likely reason is that our system did not receive sufficient data to score your application. Please ensure you are signed into Quick Credit using your main mobile device, and also keep your data on while using the app in order for us to determine the best possible loan offer for you."/>
          <Question id="11" text=" Q11. My loan status shows ‘Disbursed’, but I am yet to receive funds in my account?" answer="Funds are typically received within a few minutes of receiving disbursement confirmation. We recommend checking that the bank account provided is a personal account, as we do not process transfers to 3rd party accounts. We also advice checking your account balance directly as credit alerts are not always received with transfers."/>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FAQs;
