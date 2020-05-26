import React from 'react';
import Section from '../styled-only/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../styled-only/Title';
import Skill from '../sub-compo/Skill';
import Link from '../styled-only/Link';

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Me = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 15%;
`

const Avatar = styled.img`
    width: 200px;
    border-radius: 50%;
    border: solid 5px ${colors.turkoise};
    opacity: 0.9;
    background: #ffffff;
    box-shadow: inset 16px 16px 32px #d1d1d1, inset -16px -16px 32px #ffffff;
    margin-bottom: 25px;
`

const Bio = styled.div`
    text-align: center;
`

const BioHeader = styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 15px;
`

const BioText = styled.div`
    font-size: 0.8rem;
`

const Contact = styled(Link)`
    color: ${colors.turkoise};
`

const Break = styled.div`
    margin: 10px;
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
            <Me>
                <Avatar src={require('../../ressources/pic_profile.jpg')} alt="Gordon Preumont"/>
                <Bio>
                    <BioHeader>Who's this guy?</BioHeader>
                    <BioText>
                        With a master’s degree in business management, 
                        I worked 10 years in finance in various positions and areas.
                        <Break />
                        Passionate about programming and technologies, I decided to 
                        change careers to become a Full Stack Developer to better 
                        meet my values and live from my passion. 
                        <Break />
                        Today I am fulfilled and more motivated than ever. 
                        <Break />
                        <Contact href="#contact">Let's do something together !</Contact>
                    </BioText>
                </Bio>
            </Me>
        </Section>
    )
}

export default About;