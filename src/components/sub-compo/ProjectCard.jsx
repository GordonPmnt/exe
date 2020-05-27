import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import device from '../../styles/device';

const Card = styled.div`
    height: 240px;
    width: 100vw;
    background-color: #fff;
    margin: 0;
    background-image: url(${({ picture }) => require('../../ressources/' + picture)});
    background-repeat:no-repeat;
    background-size: cover;

    @media ${device.mobileL} {
        height: 300px;
        width: 390px;
    }
`

const ProjectCard = ({ id, name, client, github, mainStacks, stackIcons, picture, description }) => {
    return (
        <Card picture={picture}>
            PROJECT
        </Card>
    )
}

export default ProjectCard;