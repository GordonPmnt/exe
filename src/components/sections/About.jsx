import React from 'react';
import Section from '../styled-only/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../styled-only/Title';
import Skill from '../sub-compo/Skill';
import Link from '../styled-only/Link';
import device from '../../styles/device';

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Me = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    margin: 40px 15%;

    @media ${device.tablet} {
        flex-direction: row;
    }
`

const Avatar = styled.img`
    width: 200px;
    border-radius: 100%;
    border: solid 5px ${colors.turkoise};
    opacity: 0.9;
    margin-bottom: 25px;

    @media ${device.tablet} {
        width: 300px;
        margin-right: 100px;
    }
`

const Bio = styled.div`
    text-align: center;
`

const BioHeader = styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 15px;

    @media ${device.tablet} {
        font-size: 1.5rem
    }
`

const BioText = styled.div`
    font-size: 0.8rem;

    @media ${device.tablet} {
        font-size: 1.1rem
    }
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
            <Title title={"ABOUT"} />
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
                        change careers to become a <b>Full-Stack Developer</b> to better 
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