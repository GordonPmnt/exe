import React, { useState } from 'react';
import Section from '../sub-compo/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../sub-compo/Title';
import device from '../../styles/device';

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5% 5%;

    @media ${device.tablet} {
        margin: 5% 25%;
    }
`

const Input = styled.input`
    background: ${colors.darkBlue};
    border: solid 2px ${colors.darkGrey};
    font-size: 1.1rem;
    color: ${colors.darkerWhite};
    padding: 10px;
`
const TextInput = props => <Input type="text" {...props} />

const TextAreaInput = styled.textarea`
    background: ${colors.darkBlue};
    border: solid 2px ${colors.darkGrey};
    font-size: 1.1rem;
    height: 200px;
    color: ${colors.darkerWhite};
    padding: 10px;
`

const SubTitle = styled.h4`
    color: ${colors.turkoise};
    text-align: center;
    font-size: 0.9rem;

    @media ${device.tablet} {
        font-size: 1.2rem;
    }
`

const Submit = styled.input`
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    border: 1.5px solid ${colors.darkerWhite};
    background: transparent;
    font-size: 1rem;
    text-align: center;
    padding: 8px 20px;
    font-family: "Raleway", sans-serif;
    color: ${colors.darkerWhite};
    transition: all 0.5s;
    cursor: pointer;
    font-weight: bold;
    width: 150px;

    &:hover {
        background-color: ${colors.turkoise};
        border-color: ${colors.turkoise};
        color: ${colors.darkerWhite};
    }
    &:focus {
        outline: none;
    }
`

const Contact = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    return (
        <Section
            id="contact"
            background={colors.darkGrey}
            width="100vw"
            height="90vh"
        >
            <Title title="CONTACT" color={colors.darkerWhite}/>
            <SubTitle>Have a question or want to work together?</SubTitle>
            <ContactForm>
                <TextInput 
                    name="name" 
                    placeholder="Name"
                    value={name}
                    onChange={() => setName()}
                    require
                />
                <TextInput 
                    name="email" 
                    placeholder="Enter email"
                    value={email} 
                    onChange={() => setEmail()}
                    require
                />
                <TextAreaInput 
                    placeholder="Your message" 
                    value={message}
                    onChange={() => setMessage()}
                    require
                />
                <Submit 
                    fontSize="1rem"
                    value="SUBMIT"
                    type="submit"
                />
            </ContactForm>
        </Section>
    )
}

export default Contact;