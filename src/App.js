import React from 'react';
import './App.css';
import About from './components/body/About';
import MainNavigation from './components/header/MainNavigation';
import Process from './components/body/Process';
import Pricing from './components/body/Pricing';
import WhyUs from './components/body/WhyUs';

function App() {
  return <React.Fragment>
    <MainNavigation />
    <About />
    <Process />
    <Pricing />
    <WhyUs />
  </React.Fragment>

  ;
}

export default App;
