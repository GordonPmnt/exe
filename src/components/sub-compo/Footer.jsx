import React from 'react';
import Section from './Section'
import colors from '../../styles/colors';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

const Icons = styled.div`
    display: flex;
    justify-content: center;
`

const FooterButton = styled.a`
    display: flex;
    font-size: 1.8rem;
    margin: 20px 10px;
    color: ${colors.darkerWhite};
    background: ${colors.darkGrey};
    padding: 15px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s, transform 0.3s;

    &:hover {
        color: ${colors.darkerWhite};
        background: ${colors.pinkMexican};
        transform: scale(1.1);
    }
`

const Signature = styled.p`
    font-size: 0.9rem;
    text-align: center;
    margin: 5px;
`

const Footer = () => {
    return (
        <Section background={colors.darkBlue} height="150px">
            <Icons>
                <FooterButton href="https://www.linkedin.com/in/gordon-preumont-fullstack/">
                    <LinkedInIcon fontSize="inherit" />
                </FooterButton>
                <FooterButton href="https://github.com/GordonPmnt">
                    <GitHubIcon fontSize="inherit" />
                </FooterButton>
            </Icons>
            <Signature>GORDON PREUMONT</Signature>
        </Section>
    )
}

export default Footer;