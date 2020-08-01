import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

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