import React from 'react';
import styled from 'styled-components';

const Landing = () => {
    const Hero = styled.div`
        width: 100vw;
        height: 100vh;
    `

    const Pitch = styled.h1`
        text-align: center;
        margin: 0;
    `

    const Name = styled.em`
        color: red;
    `

    return (
        <Hero>
            <Pitch>Hello, I'm <Name>Gordon Preumont</Name>.</Pitch>
            <Pitch>I'm a full-stack developer.</Pitch>
        </Hero>
    )
}

export default Landing;