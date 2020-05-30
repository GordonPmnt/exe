import React, { useState, useRef } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';
import { useOnClickOutside } from '../utils/hooks';
import Link from '../sub-compo/Link';

const Container = styled.div`
  display: initial;
  z-index: 100;

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
  z-index: 100;
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
  display: flex;
  flex-direction: column;
  background: ${colors.darkBlue};
  width: 100vw;
  position: absolute;
  border-bottom: solid 3px ${colors.turkoise};
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-out;
`

const Burger = () => {

  const [ open, setOpen ] = useState(false)
  
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container ref={node}>
      <Nav>
        <Button onClick={() => setOpen(!open)}>
          <DehazeIcon />
        </Button>
      </Nav>
      <Menu open={open} onClick={() => setOpen(!open)}>
        <Link href="#home">HOME</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#portfolio">PORTFOLIO</Link>
        <Link href="#contact">CONTACT</Link>
      </Menu>
    </Container>
  )
}

export default Burger;