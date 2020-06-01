import React, { useState } from 'react';
import Section from '../sub-compo/Section';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Title from '../sub-compo/Title';
import device from '../../styles/device';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5% 5%;
    padding-bottom: 5%;

    @media ${device.tablet} {
        margin: 5% 25% 0 25%;
    }
`

const Input = styled.input`
    background: ${colors.darkBlue};
    border: solid 2px ${colors.darkGrey};
    font-size: 1rem;
    color: ${colors.darkerWhite};
    padding: 10px;
`
const TextInput = props => <Input type="text" {...props} />

const TextAreaInput = styled.textarea`
    background: ${colors.darkBlue};
    border: solid 2px ${colors.darkGrey};
    font-size: 1rem;
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

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const Contact = () => {
    const [ name, setName ] = useState('');
    const [ company, setCompany ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ fail, setFail ] = useState(false);

    const handleSubmit = event => {
        event.preventDefault()
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name,
                email,
                company,
                phone,
                message
            }
        })
        .then( response => {
            if (response.data.status === 'success') {
                setName('')
                setCompany('')
                setEmail('')
                setPhone('')
                setMessage('')
                setSuccess(true)
            }
            if(response.data.status === 'fail') {
                console.log('fail')
                setFail(true)
            }
        })
    }

    return (
        <Section
            id="contact"
            background={colors.darkGrey}
        >
            <Title title="CONTACT" color={colors.darkerWhite}/>
            <SubTitle>Have a question or want to work together?</SubTitle>
            <ContactForm onSubmit={handleSubmit}>
                <TextInput 
                    name="name" 
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                />
                <TextInput 
                    name="email" 
                    placeholder="Enter email"
                    value={email} 
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <TextInput 
                    name="company"
                    placeholder="Company name (optional)"
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                />
                <TextInput
                    name="phone"
                    placeholder="Enter your phone number (optional)"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                />
                <TextAreaInput 
                    placeholder="Your message" 
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    required
                />
                <Submit 
                    fontSize="1rem"
                    value="SUBMIT"
                    type="submit"
                />

                {/* SNACKBARS */}
                <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                    <Alert onClose={() => setSuccess(false)} severity="success">
                        Thanks, your message has successfully been sent.
                    </Alert>
                </Snackbar>
                <Snackbar open={fail} autoHideDuration={8000} onClose={() => setFail(false)}>
                    <Alert onClose={() => setFail(false)} severity="error">
                        It seem's there is problem, you message couldn't be sent. Please try to reach my directly by email.
                    </Alert>
                </Snackbar>
                {/* END SNACKBARS */}

            </ContactForm>
        </Section>
    )
}

export default Contact;