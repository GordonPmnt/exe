import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import device from '../../styles/device';
import ButtonWhite from '../sub-compo/ButtonWhite'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    background: url(${require('../../ressources/background.png')}) no-repeat;
    background-size: cover;
`

const Pitch = styled.h1`
    font-size: 1.4rem;
    text-align: center;
    margin: 0;

    @media ${device.laptop} {
        font-size: 3.1rem;
    }
`

const Name = styled.span`
    color: ${colors.pinkMexican};
`

const Hero = () => {
    return (
        <Section id="home">
            <Background
                playsInline
                autoPlay
                muted
                loop
            >
                <source 
                    src={require("../../ressources/background.mov")}
                    type="video/mp4"
                />
            </Background>
            <Pitch>Hello, I'm <Name>Gordon Preumont</Name>.</Pitch>
            <Pitch>I'm a full-stack developer.</Pitch>
            <ButtonWhite href="#about">{"View my work"}<ArrowDownwardIcon style={{ marginLeft: "10px" }} /></ButtonWhite>
        </Section>
    )
}

export default Hero;