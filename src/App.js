import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navbar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
