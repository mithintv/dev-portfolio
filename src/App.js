import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navbar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
