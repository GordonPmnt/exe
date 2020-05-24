import React from 'react';
import Landing from './components/Landing';
import Burger from './components/headers/Burger';
import Navbar from './components/headers/Navbar';

const App = () => {
  return (
    <>
      <Burger />
      <Navbar />
      <Landing />
    </>
  );
}

export default App;
