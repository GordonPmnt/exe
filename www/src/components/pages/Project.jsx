import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../sub-compo/Section';
import colors from '../../styles/colors';
import Burger from '../sub-compo/Burger';
import Navbar from '../sub-compo/Navbar';
import styled from 'styled-components';

const Container = styled(Section)`
    min-height: calc(100vh - 190px);
    padding-top: 100px;
    margin: 0;
`

const Project = () => {
    const { id } = useParams();
    return (
        <>
            <Burger />
            <Navbar />
            <Container background={colors.darkerWhite}>
                <p>{`Project ${id}`}</p>
            </Container>
        </>
    )
}

export default Project;