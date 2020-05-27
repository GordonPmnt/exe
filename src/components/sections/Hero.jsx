import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import device from '../../styles/device';
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

const ViewWork = styled.a`
    margin-top: 20px;
    border: 3px solid #fff;
    text-decoration: none;
    background: transparent;
    font-size: 1.4rem;
    text-align: center;
    padding: 8px 20px;
    font-family: "Raleway", sans-serif;
    color: #616161;
    transition: all 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${colors.turkoise};
        border-color: ${colors.turkoise};
        color: #fff;
    }
    &:focus {
        outline: none;
    }

    @media ${device.laptop} {
        font-size: 2rem;
    }
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
            <ViewWork href="#about">{"View my work"}<ArrowDownwardIcon style={{ marginLeft: "10px" }} /></ViewWork>
        </Section>
    )
}

export default Hero;