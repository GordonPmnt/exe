import React, { useState } from 'react';
import Section from '../sub-compo/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../sub-compo/Title';
import Skill from '../sub-compo/Skill';
import Link from '../sub-compo/Link';
import device from '../../styles/device';
import Button from '../sub-compo/Button';

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
        font-size: 1.5rem;
    }
`

const BioText = styled.div`
    font-size: 0.8rem;

    @media ${device.tablet} {
        font-size: 1.1rem;
    }
`

const Contact = styled(Link)`
    color: ${colors.turkoise};
`

const SubTitle = styled.h4`
    font-size: 1rem;
    text-align: center;
    display: block;
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;

    @media ${device.tablet} {
        font-size: 1.5rem;
    }
`

const Show = styled(Button)`
    font-size: 1rem;
    border-radius: 8px;

    @media ${device.tablet} {
        font-size: 1.5rem;
    }
`

const Break = styled.div`
    margin: 10px;
`

const About = () => {
    const skills = require('../../data/skills.json')
    const [switched, setSwitched] = useState(false);

    return (
        <Section id="about" background={colors.white}>
            <Title title={"ABOUT"} />
            <SubTitle>⤜ Technical skills<Show onClick={() => setSwitched(!switched)}>Show</Show> ⤛</SubTitle>
            <Skills>
            {
                skills.map(skill => <Skill key={skill.name} {...skill} switched={switched} />)
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