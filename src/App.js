import React from 'react';
import Hero from './components/sections/Hero';
import Burger from './components/head&foot/Burger';
import Navbar from './components/head&foot/Navbar';
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
