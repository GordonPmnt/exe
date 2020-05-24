import React from 'react';
import styled from 'styled-components';
import device from '../utils/device';
import colors from '../utils/colors';

const Nav = styled.nav`
    display: none;

    @media ${device.tablet} {
        background: #1b242f;
        display: initial;
        position: fixed;
        border-bottom: solid 5px ${colors.turkoise};
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 5%;
        width: 100%;
    }
`

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 5px 15px;
    transition: all 0.5s;

    &:hover {
        color: ${colors.pinkMexican};
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Link href="#home">HOME</Link>
            <Link href="#about">ABOUT</Link>
            <Link href="#portfolio">PORTFOLIO</Link>
            <Link href="#contact">CONTACT</Link>
        </Nav>
    )
}

export default Navbar;