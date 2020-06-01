import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Burger from '../sub-compo/Burger';
import Navbar from '../sub-compo/Navbar';

const Home = () => {
    return (
        <>
            <Burger />
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home;