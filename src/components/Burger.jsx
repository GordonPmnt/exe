import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import styled from 'styled-components';
import device from '../utils/device';

const Button = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
}
`

const Burger = () => {
  return (
    <Button>
      <DehazeIcon />
    </Button>
  )
}

export default Burger;