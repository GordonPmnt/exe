import React from 'react';
import styled from 'styled-components';
import colors from './styles/colors';

const Landing = () => {
    const Hero = styled.div`
        width: 100vw;
        height: 100vh;
    `

    const Background = styled.video`
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -100;
        -ms-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        background: url(${require('../ressources/background.jpeg')}) no-repeat;
        background-size: cover;
    `

    const Pitch = styled.h1`
        text-align: center;
        margin: 0;
    `

    const Name = styled.span`
        color: ${colors.pinkMexican};
    `

    return (
        <Hero>
            <Background
                playsInline
                autoPlay
                muted
                loop
            >
                <source 
                    src={require("../ressources/background.mov")}
                    type="video/mp4"
                />
            </Background>
            <Pitch>Hello, I'm <Name>Gordon Preumont</Name>.</Pitch>
            <Pitch>I'm a full-stack developer.</Pitch>
        </Hero>
    )
}

export default Landing;