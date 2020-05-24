import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import device from '../utils/device';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Burger from './Burger';
import Navbar from './Navbar';

const Hero = styled.section`
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
    background: url(${require('../ressources/background.png')}) no-repeat;
    background-size: cover;
`

const Pitch = styled.h1`
    font-size: 1.4rem;
    text-align: center;
    margin: 0;

    @media ${device.tablet} {
        font-size: 3.1rem;
    }
`

const Name = styled.span`
    color: ${colors.pinkMexican};
`

const ViewWork = styled.button`
    margin-top: 20px;
    border: 3px solid #fff;
    background: transparent;
    font-size: 1.4rem;
    text-align: center;
    padding: 8px 20px;
    font-family: "Raleway", sans-serif;
    transition: all 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${colors.turkoise};
        border-color: ${colors.turkoise};
        color: #fff;
      }

    @media ${device.tablet} {
        font-size: 2rem;
    }
`

const Landing = () => {
    return (
        <>
            <Burger />
            <Navbar />
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
                <ViewWork>{"View my work"}<ArrowDownwardIcon style={{ marginLeft: "10px" }} /></ViewWork>
            </Hero>
        </>
    )
}

export default Landing;