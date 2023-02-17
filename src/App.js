import React from "react";
//import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import About from "./components/body/About";
import MainNavigation from "./components/header/MainNavigation";
import Process from "./components/body/Process";
import Pricing from "./components/body/Pricing";
import WhyUs from "./components/body/WhyUs";
import FAQs from "./components/body/FAQs";
import Footer from "./components/footer/Footer";
import Intro from "./components/body/Intro";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Intro />
      <About />
      <Process />
      <Pricing />
      <WhyUs />
      <FAQs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
