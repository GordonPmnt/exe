import React from 'react';
import styled from 'styled-components';
import Link from '../styled/Link';
import device from '../../styles/device';
import colors from '../../styles/colors';

const Nav = styled.nav`
    display: none;

    @media ${device.tablet} {
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