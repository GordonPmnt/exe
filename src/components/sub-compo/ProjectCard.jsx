import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
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
`

const Header = styled.h3`
`

const LinkProject = styled.a`
`

const Skill = styled(SubSkill)`
`

const ProjectCard = ({ id, name, mainStacks, stackIcons, picture }) => {
    return (
        <Card picture={picture}>
            <Header>{name}</Header>
            {
                mainStacks.map((subSkill, index) => <Skill subSkill={subSkill} index={index} svg={stackIcons} />)
            }
            <LinkProject>LEARN MORE</LinkProject>
        </Card>
    )
}

export default ProjectCard;