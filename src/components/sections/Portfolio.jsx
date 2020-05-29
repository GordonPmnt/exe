import React from 'react';
import Section from '../sub-compo/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../sub-compo/Title';
import device from '../../styles/device';
import ProjectCard from '../sub-compo/ProjectCard'

const Gallery = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 10%;

    @media ${device.mobileL} {
        margin: 0 15%;
    }
`

const Portfolio = () => {
    const portfolio = require('../../data/portfolio.json');
    return (
        <Section id="portfolio" background={colors.darkerWhite}>
            <Title title={"PORTFOLIO"} />
            <Gallery>
                {portfolio.map(project => <ProjectCard key={project.id} {...project} />)}
            </Gallery>
        </Section>
    )
}

export default Portfolio;