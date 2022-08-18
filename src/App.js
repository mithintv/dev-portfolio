import React from 'react';

import SideBar from './interface/SideBar';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SideBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
}

export default App;
