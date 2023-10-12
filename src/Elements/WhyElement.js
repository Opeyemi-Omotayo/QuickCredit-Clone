import React from "react";
import Fig1 from "../components/Images/Fig1.svg";
import Fig2 from "../components/Images/Fig2.svg";
import Fig3 from "../components/Images/Fig3.svg";
import Fig4 from "../components/Images/Fig4.svg";

const contents = [
  {
    title: "We're flexible",
    description: "You can save interest by repaying your short term loan early. If things go wrong, we're here to help you.",
    image: Fig1,
    alt: "fig1",
    animation: "fade-right",
    id: 1
  },
  {
    title: "We're committed to you",
    description: " Easy navigation and user experience. Access to QuickCredit services with ease.",
    image: Fig1,
    alt: "fig2",
    animation: "fade-left",
    id: 2
  },
  {
    title: "We're transparent",
    description: "There are no hidden charges. We make all our fees completely clear upfront before you apply.",
    image: Fig1,
    alt: "fig3",
    animation: "fade-right",
    id: 3
  },
  {
    title: "We're here to help",
    description: "Get extensive details of requested loan facility real-time.",
    image: Fig1,
    alt: "fig4",
    animation: "fade-left",
    id: 4
  }
]

const WhyElement = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
      {contents.map((content) => (
         <div className="flex flex-col items-center justify-center " data-aos={content.animation} key={content.id}>
         <img src={content.image} alt={content.alt} className="w-[70px] h-[70px] mb-3"/>
         <h1 className="text-xl font-bold ">{content.title}</h1>
         <p className="text-center">
           {content.description}
         </p>
       </div>
      ))}
      </div>
     
    </React.Fragment>
  );
};

export default WhyElement;
