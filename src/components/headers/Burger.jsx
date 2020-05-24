import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import styled from 'styled-components';
import device from '../../utils/device';
import colors from '../../utils/colors';
import Link from '../buttons/Link';

const Container = styled.div`
  display: initial;

  @media ${device.tablet} {
    display: none;
  }
`

const Nav = styled.nav`
  position: fixed;
  border-bottom: solid 3px ${colors.turkoise};
  padding: 5px 10px;
  background: ${colors.darkBlue};
  width: 100%;
`

const Button = styled.button`
  background: transparent;
  border: none;
  color: #fff;

  &:focus {
    color: ${colors.pinkMexican};
    outline: none;
  }
`

const Menu = styled.div`
  top: 42px;
  display: flex;
  flex-direction: column;
  background: ${colors.darkBlue};
  width: 100vw;
  position: absolute;
  transition: transform 0.3s ease-in-out;
`

const Burger = () => {

  return (
    <Container>
      <Nav>
        <Button>
          <DehazeIcon />
        </Button>
      </Nav>
      <Menu>
        <Link href="#home">HOME</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#portfolio">PORTFOLIO</Link>
        <Link href="#contact">CONTACT</Link>
      </Menu>
    </Container>
  )
}

export default Burger;