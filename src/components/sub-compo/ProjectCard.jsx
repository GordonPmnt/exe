import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { Collapse } from '@material-ui/core';
import device from '../../styles/device';
import SubSkill from './SubSkill';

const Card = styled.div`
    height: 240px;
    width: 100vw;
    background-color: #fff;
    margin: 0;
    background-image: url(${({ picture }) => require('../../ressources/' + picture)});
    background-repeat:no-repeat;
    background-size: cover;

    @media ${device.mobileL} {
        height: 300px;
        width: 390px;
    }

    &:hover {
        background-image: none;
`

const Header = styled.h3`
    text-align: center;
    font-size: 1.5rem;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const LinkProject = styled.a`
    border: 2px solid ${colors.pinkMexican};
    text-decoration: none;
    background: transparent;
    font-size: 1.4rem;
    text-align: center;
    padding: 5px 15px;
    font-family: "Raleway", sans-serif;
    color: #616161;
    transition: all 0.5s;
    cursor: pointer;
    position: relative;
    top: 60px;
    left: 50%;
    margin-left: -90px;

    &:hover {
        background-color: ${colors.pinkMexican};
        border-color: ${colors.pinkMexican};
        color: #fff;
    }
    &:focus {
        outline: none;
    }

    @media ${device.mobileL} {
        top: 90px;
    }
`

const SkillContainer = styled.div`
    border: 1px solid ${colors.grey};
    border-radius: 20px;
    padding: 4px 15px;
    margin: 5px;
`

const ProjectCard = ({ id, name, mainStacks, stackIcons, picture }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Card 
            picture={picture} 
            onMouseEnter={() => setChecked(true)} 
            onMouseLeave={() => setChecked(false)}
        >
            <Collapse in={checked} timeout={700}>
                <Header>{name}</Header>
                <List>
                {
                    mainStacks.map((subSkill, index) =>
                        <SkillContainer key={id}>
                            <SubSkill 
                                key={id} 
                                subSkill={subSkill} 
                                index={index} 
                                svg={stackIcons} 
                            />
                        </SkillContainer>
                    )
                }
                </List>
            </Collapse>
            <Collapse in={checked} timeout={200}>
                <LinkProject>LEARN MORE</LinkProject>
            </Collapse>
        </Card>
    )
}

export default ProjectCard;