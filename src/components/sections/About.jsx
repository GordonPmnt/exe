import React from 'react';
import Section from '../styled/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import device from '../../styles/device';
import Title from '../styled/Title';
import Skill from '../sub-compo/Skill';

const About = () => {
    const skills = require('../../data/skills.json')
    return (
        <Section id="about" background={colors.white}>
            <Title>ABOUT</Title>
            {
                skills.map(skill => <Skill key={skill.name} {...skill} />)
            }
        </Section>
    )
}

export default About;