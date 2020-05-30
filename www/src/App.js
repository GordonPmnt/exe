import React from 'react';
import Hero from './components/sections/Hero';
import Burger from './components/sub-compo/Burger';
import Navbar from './components/sub-compo/Navbar';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/sub-compo/Footer';

const App = () => {
  return (
    <>
      <Burger />
      <Navbar />

      <Hero />
      <About />

      {/* Writte routes as from here */}
      <Portfolio />
      {/* End of routes */}

      <Contact />

      <Footer />
    </>
  );
}

export default App;
