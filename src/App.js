import React from 'react';
import './App.css';
import About from './components/body/About';
import MainNavigation from './components/header/MainNavigation';

function App() {
  return <React.Fragment>
    <MainNavigation />
    <About />
  </React.Fragment>

  ;
}

export default App;
