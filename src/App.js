import React from 'react';
import './App.css';
import About from './components/body/About';
import MainNavigation from './components/header/MainNavigation';
import Process from './components/body/Process';
import Pricing from './components/body/Pricing';
import WhyUs from './components/body/WhyUs';
import FAQs from './components/body/FAQs';

function App() {
  return <React.Fragment>
    <MainNavigation />
    <About />
    <Process />
    <Pricing />
    <WhyUs />
    <FAQs />
  </React.Fragment>

  ;
}

export default App;
