import React from 'react';
import Section from '../styled/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import device from '../../styles/device';
import Title from '../styled/Title';

const About = () => {
    return (
        <Section id="about" background={colors.white}>
            <Title>ABOUT</Title>
        </Section>
    )
}

export default About;