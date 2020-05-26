import React from 'react';
import styled from 'styled-components';
import device from '../../styles/device';

const Topic = styled.li`
    list-style: none;
    display: flex;
`

const Icon = styled.img`
    width: 15px;
    margin-right: 10px;

    @media ${device.tablet} {
        width: 20px;
    }
`

const Name = styled.p`
    font-size: 0.8rem;
    margin: 0;
    text-align: left;

    @media ${device.tablet} {
        font-size: 1rem;
    }
`

const SubSkill = ({ subSkill, index, svg }) => {
    return (
        <Topic>
            <Icon src={require(`../../ressources/SVG/${svg[index]}`)} alt={subSkill} />
            <Name>{subSkill}</Name>
        </Topic>
    )
}

export default SubSkill;