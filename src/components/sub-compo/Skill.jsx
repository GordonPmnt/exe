import React from 'react';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';

const Container = styled.div`
    width: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px 20px 0px;
`

const IconContainer = styled.div`
    background: ${colors.turkoise};
    height: 72.5px;
    width: 72.5px;
    display: flex;
    justify-content: center;
    border-radius: 100%;
`

const Icon = styled.img`
    width: 30px;
    -webkit-filter: invert(1);
    filter: invert(1);
`

const Name = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 5;
`

const Description = styled.p`
    font-size: 0.8rem;
    margin: 0;
`

const Skill = ({ name, icon, description, skills, svg }) => {
    const displayedIcon = require(`../../ressources/SVG/${icon}`)
    return (
        <Container>
            <IconContainer>
                <Icon src={displayedIcon} alt={name} />
            </IconContainer>
            <Name>{name}</Name>
            <Description>{description}</Description>
        </Container>
    )
}

export default Skill;