import React from 'react';
import Section from '../sub-compo/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../sub-compo/Title';
import device from '../../styles/device';


const Portfolio = () => {
    return (
        <Section id="portfolio" background={colors.darkerWhite}>
            <Title title={"PORTFOLIO"} />
        </Section>
    )
}

export default Portfolio;