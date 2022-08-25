import React, { useEffect, useState } from 'react';

import SideBar from './interface/SideBar';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Social from "./interface/Social";


const App = () => {

  const [home, setHome] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHome(true);
    }, 1000);
    setTimeout(() => {
      setSideBar(true);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {home && <Home />}
      {sideBar && <About />}
      {sideBar && <Portfolio />}
      {sideBar && <Contact />}
      {sideBar &&
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
        </SideBar>}
      {sideBar && <SideBar side='right'>
        <p className='vertical'>Created by Mithin G. Thomas</p>
      </SideBar>}
    </React.Fragment>
  );
};

export default App;
