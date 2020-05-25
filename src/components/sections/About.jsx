import React from 'react';
import Section from '../subcomponents/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import device from '../../styles/device';
import Title from '../subcomponents/Title';

const About = () => {
    return (
        <Section id="about" background={colors.white}>
            <Title>ABOUT</Title>
        </Section>
    )
}

export default About;