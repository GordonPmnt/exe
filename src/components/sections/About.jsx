import React from 'react';
import Section from '../styled-only/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../styled-only/Title';
import Skill from '../sub-compo/Skill';

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const About = () => {
    const skills = require('../../data/skills.json')
    return (
        <Section id="about" background={colors.white}>
            <Title>ABOUT</Title>
            <Skills>
            {
                skills.map(skill => <Skill key={skill.name} {...skill} />)
            }
            </Skills>
        </Section>
    )
}

export default About;