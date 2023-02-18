import React from 'react';
import About from '../components/body/About';
import FAQs from '../components/body/FAQs';
import Intro from '../components/body/Intro';
import Pricing from '../components/body/Pricing';
import Process from '../components/body/Process';
import WhyUs from '../components/body/WhyUs';
import Footer from '../components/footer/Footer';
import MainNavigation from '../components/header/MainNavigation';

const HomePage = () => {
  return <React.Fragment>
    <MainNavigation />
    <Intro />
    <About />
    <Process />
    <Pricing />
    <WhyUs />
    <FAQs />
    <Footer />
  </React.Fragment>
}

export default HomePage
