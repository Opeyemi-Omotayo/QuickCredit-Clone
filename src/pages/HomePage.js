import React from 'react';
import About from '../components/body/About';
import FAQs from '../components/body/FAQs';
import Intro from '../components/body/Intro';
import Pricing from '../components/body/Pricing';
import Process from '../components/body/Process';
import WhyUs from '../components/body/WhyUs';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const HomePage = () => {
  return <React.Fragment>
    <Header />
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
