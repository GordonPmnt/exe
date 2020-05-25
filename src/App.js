import React from 'react';
import Hero from './components/sections/Hero';
import Burger from './components/sub-compo/Burger';
import Navbar from './components/sub-compo/Navbar';
import About from './components/sections/About';

const App = () => {
  return (
    <>
      <Burger />
      <Navbar />

      {/* Writte routes as from here */}
      <Hero />
      <About />
    </>
  );
}

export default App;
