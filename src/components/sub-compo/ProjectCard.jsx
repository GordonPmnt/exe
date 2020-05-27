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
    top: 100px;
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
`

const Skill = styled(SubSkill)`
`

const ProjectCard = ({ id, name, mainStacks, stackIcons, picture }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <Card 
            picture={picture} 
            onMouseEnter={() => setChecked(true)} 
            onMouseLeave={() => setChecked(false)}
        >
            <Collapse in={checked} timeout={700} direction="up">
                <Header>{name}</Header>
                {
                    mainStacks.map((subSkill, index) => <Skill key={id} subSkill={subSkill} index={index} svg={stackIcons} />)
                }
            </Collapse>
            <Collapse in={checked} timeout={200} direction="up">
                <LinkProject>LEARN MORE</LinkProject>
            </Collapse>
        </Card>
    )
}

export default ProjectCard;