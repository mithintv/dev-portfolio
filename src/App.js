import React from 'react';

import SideBar from './interface/SideBar';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Social from "./interface/Social";



function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <SideBar side='left'>
        <Social href='https://instagram.com/mithintv'>
          <i className="fa-brands fa-instagram"></i>
        </Social>
        <Social href='https://github.com/mithin888'>
          <i className="fa-brands fa-github"></i>
        </Social>
        <Social href='https://linkedin.com/in/mithintv'>
          <i className="fa-brands fa-linkedin-in"></i>
        </Social>
      </SideBar>
      <SideBar side='right'>
        <p className='vertical'>Created by Mithin G. Thomas</p>
      </SideBar>
    </React.Fragment>
  );
}

export default App;
