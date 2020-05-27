import React from 'react';
import styled from 'styled-components';
import device from '../../styles/device';

const TitleText = styled.h3`
    text-align: center;
    font-size: 2rem;
    margin: 0;
    padding-top: 50px;

    @media ${device.tablet} {
        font-size: 2.5rem;
    }
`

const TitleRow = styled.h3`
    text-align: center;
    font-size: 1.8rem;
    margin: 0 0 50px 0;

    @media ${device.tablet} {
        font-size: 2.3rem;
    }
`

const Title = ({ title }) => {
    return (
        <>
            <TitleText>{title}</TitleText>
            <TitleRow> ▔▔ </TitleRow>
        </>
    )
}

export default Title;