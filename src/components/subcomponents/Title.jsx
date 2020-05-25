import styled from 'styled-components';
import React from 'react';
import colors from '../../styles/colors';
import device from '../../styles/device';

const Title = styled.h3`
    text-align: center;
    font-size: 2rem;

    @media ${device.tablet} {
        font-size: 2.5rem;
    }
`

export default Title;