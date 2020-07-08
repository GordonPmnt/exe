import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { Collapse } from '@material-ui/core';
import device from '../../styles/device';
import SubSkill from './SubSkill';
import { Link } from "react-router-dom";

const Card = styled.div`
    height: 240px;
    width: 100vw;
    margin: 0;
    background-image: url(${({ picture }) => require('../../ressources/portfolio/' + picture)});
    background-repeat:no-repeat;
    background-size: cover;

    @media ${device.mobileL} {
        height: 300px;
        width: 390px;
    }

    &:hover {
        background-image: linear-gradient(white, transparent);
    }
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

const LinkProject = styled(Link)`
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
    top: 40px;
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
        top: 70px;
    }
`

const SkillContainer = styled.div`
    margin: 5px;
    color: ${colors.pinkMexican};

    img {
        width: 20px;
        margin-right: 5px;
    }
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
                <Header>{name} <br /> ▔ </Header>
            </Collapse>
            <Collapse in={checked} timeout={700}>
                <List>
                {
                    mainStacks.map((subSkill, index) =>
                        <SkillContainer key={id + index}>
                            <SubSkill 
                                key={id + index} 
                                subSkill={subSkill} 
                                index={index} 
                                svg={stackIcons} 
                            />
                        </SkillContainer>
                    )
                }
                </List>
            </Collapse>
            {false &&
            <Collapse in={checked} timeout={400}>
                <LinkProject to={`/project/${id}`}>LEARN MORE</LinkProject>
            </Collapse>
            }
        </Card>
    )
}

export default ProjectCard;