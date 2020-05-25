import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';
import SubSkill from './SubSkill';

const Container = styled.div`
    width: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px 20px 0px;
    cursor: pointer;

    &:hover {
        .jsEyyE {
            transition: all 0.5s;
            background: ${colors.pinkMexican};
        }
    }

    @media ${device.tablet} {
        width: 165px;
    }
`

const IconContainer = styled.div`
    background: ${colors.turkoise};
    height: 72.5px;
    width: 72.5px;
    display: flex;
    justify-content: center;
    border-radius: 100%;

    @media ${device.tablet} {
        height: 80px;
        width: 80px;
    }
`

const Icon = styled.img`
    width: 30px;
    -webkit-filter: invert(1);
    filter: invert(1);

    @media ${device.tablet} {
        width: 40px;
    }
`

const Name = styled.p`
    font-size: 1rem;
    font-weight: bold;
    margin: 5;

    @media ${device.tablet} {
        font-size: 1.3rem;
    }
`

const Description = styled.p`
    font-size: 0.8rem;
    margin: 0;

    @media ${device.tablet} {
        font-size: 1rem;
    }
`

const Skill = ({ name, icon, description, subSkills, svg }) => {
    const displayedIcon = require(`../../ressources/SVG/${icon}`)
    const [switched, setSwitched] = useState(false);

    return (
        <Container onClick={() => setSwitched(!switched)}>
            <IconContainer>
                <Icon src={displayedIcon} alt={name} />
            </IconContainer>
            <Name>{name}</Name>
            {switched
                ?   
                    <ul>
                        {subSkills.map((subSkill, index) => 
                            <SubSkill 
                                subSkill={subSkill}
                                index={index}
                                svg={svg} 
                            />
                        )}
                    </ul>
                :   
                    <Description>{description}</Description>
            }
        </Container>
    )
}

export default Skill;