import React, { useState, useRef } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';
import { useOnClickOutside } from '../utils/hooks';
import { Link } from "react-router-dom";
import LinkText from './LinkText';

const Container = styled.div`
  position: fixed;
  display: initial;
  z-index: 100;

  @media ${device.tablet} {
    display: none;
  }
`

const Nav = styled.nav`
  padding: 10px;
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
  position: relative;
  top: -45px;
  transform: ${({ open }) => open ? 'translateY(10px)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-out;
`

const LinkSimple = styled(Link)`
    text-decoration: none;
`

const Burger = () => {

  const [ open, setOpen ] = useState(false)
  
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  const pathName = window.location.pathname;

  return (
    <Container ref={node}>
      <Nav>
        {pathName.includes('project') 
        ?
          <LinkSimple to="/"><LinkText>{'< HOME'}</LinkText></LinkSimple>
        :
          <Button onClick={() => setOpen(!open)}>
            <DehazeIcon size="small" />
          </Button>
        }
      </Nav>
      <Menu open={open} onClick={() => setOpen(!open)}>
        <LinkText href="#home">HOME</LinkText>
        <LinkText href="#about">ABOUT</LinkText>
        <LinkText href="#portfolio">PORTFOLIO</LinkText>
        <LinkText href="#contact">CONTACT</LinkText>
      </Menu>
    </Container>
  )
}

export default Burger;