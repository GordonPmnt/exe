import React, { useState } from 'react';
import Section from '../sub-compo/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../sub-compo/Title';
import Skill from '../sub-compo/Skill';
import LinkText from '../sub-compo/LinkText';
import device from '../../styles/device';
import Slide from '@material-ui/core/Slide';

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 15%;
    
    @media ${device.laptop} {
        min-height: 350px;
    }
`

const Me = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    margin: 0 10%;
    min-height: 510px;

    @media ${device.laptop} {
        margin: 0 20%;
        flex-direction: row;
    }
`

const Avatar = styled.img`
    width: 200px;
    border-radius: 100%;
    border: solid 5px ${colors.turkoise};
    opacity: 0.9;
    margin-bottom: 25px;

    @media ${device.laptop} {
        width: 280px;
        margin-right: 100px;
    }
`

const Bio = styled.div`
    text-align: center;
    max-width: 700px;
`

const BioHeader = styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 15px;

    @media ${device.laptop} {
        font-size: 1.5rem;
    }
`

const BioText = styled.div`
    font-size: 0.8rem;

    @media ${device.laptop} {
        font-size: 1.1rem;
    }
`

const Contact = styled(LinkText)`
    color: ${colors.turkoise};
`

const Break = styled.div`
    margin: 10px;
`

const Swipe = styled.div`
    cursor: pointer;
    text-align: center;
    padding: 40px;
    transition: all 0.5s;
    color: ${colors.turkoise};

    &:hover {
        color: ${colors.pinkMexican};
    }
`

const About = () => {
    const skills = require('../../data/skills.json')

    const [showSkills, setShowSkills] = useState(true)
    const [showMe, setShowMe] = useState(false)

    const handleClick = () => {
        setShowSkills(!showSkills)
        setShowMe(!showMe)
    }

    return (
        <Section id="about" background={colors.white}>
            <Title title={"ABOUT"} />
            <Swipe onClick={handleClick}>{showSkills ? "Who's that guy ?" : "Show skills"}</Swipe>
            <Slide direction="left" in={showSkills} mountOnEnter unmountOnExit>
                <Skills>
                    {
                        skills.map(skill => <Skill key={skill.id} {...skill} />)
                    }
                </Skills>
            </Slide>
            <Slide direction="left" in={showMe} mountOnEnter unmountOnExit>
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
            </Slide>
        </Section>
    )
}

export default About;