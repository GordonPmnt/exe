import React from 'react';
import styled from 'styled-components';
import LinkText from './LinkText';
import device from '../../styles/device';
import colors from '../../styles/colors';
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: none;

    @media ${device.tablet} {
        z-index: 100;
        background: ${colors.darkBlue};
        display: initial;
        position: fixed;
        border-bottom: solid 5px ${colors.turkoise};
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5%;
        width: 100%;
    }
`

const LinkSimple = styled(Link)`
    text-decoration: none;
`

const Navbar = () => {
    const pathName = window.location.pathname;
    return (
        
        <Nav>
            {pathName.includes('project') 
            ?
                <LinkSimple to="/"><LinkText>{'< BACK'}</LinkText></LinkSimple>
            :
                <>
                    <LinkText href="#home">HOME</LinkText>
                    <LinkText href="#about">ABOUT</LinkText>
                    <LinkText href="#portfolio">PORTFOLIO</LinkText>
                    <LinkText href="#contact">CONTACT</LinkText>
                </>
            }
        </Nav>
    )
}

export default Navbar;