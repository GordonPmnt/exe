import React, { useState, useRef } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';
import { useOnClickOutside } from '../utils/hooks';
import { Link } from "react-router-dom";
import { LinkA, LinkP } from './LinkText';

const Container = styled.div`
  position: fixed;
  display: initial;
  z-index: 100;

  @media ${device.tablet} {
    display: none;
  }
`

const Nav = styled.nav`
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
  position: relative;
  border-bottom: solid 3px ${colors.turkoise};
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
          <LinkSimple to="/"><LinkP>{'< BACK'}</LinkP></LinkSimple>
        :
          <Button onClick={() => setOpen(!open)}>
            <DehazeIcon />
          </Button>
        }
      </Nav>
      <Menu open={open} onClick={() => setOpen(!open)}>
        <LinkA href="#home">HOME</LinkA>
        <LinkA href="#about">ABOUT</LinkA>
        <LinkA href="#portfolio">PORTFOLIO</LinkA>
        <LinkA href="#contact">CONTACT</LinkA>
      </Menu>
    </Container>
  )
}

export default Burger;