import React from 'react';
import Landing from './components/sections/Landing';
import Burger from './components/headers/Burger';
import Navbar from './components/headers/Navbar';
import About from './components/sections/About';

const App = () => {
  return (
    <>
      <Burger />
      <Navbar />

      {/* Writte routes as from here */}
      <Landing />
      <About />
    </>
  );
}

export default App;
