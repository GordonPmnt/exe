import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../sub-compo/Section';
import colors from '../../styles/colors';
import Burger from '../sub-compo/Burger';
import Navbar from '../sub-compo/Navbar';
import styled from 'styled-components';
import Title from '../sub-compo/Title';
import { LinkA } from '../sub-compo/LinkText';
import Carousel from '../sub-compo/Carousel';
import Grid from '@material-ui/core/Grid';
import device from '../../styles/device';

const Container = styled(Section)`
    padding-top: 40px;
    margin: 0;

    @media ${device.laptop} {
        height: calc(100vh - 150px);
    }
`

const Git = styled(LinkA)`
    color: ${colors.turkoise};
    margin: 0;
`

const Meta = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 10%;
    overflow: scroll;
    background: ${colors.darkerWhite};

    @media ${device.laptop} {
        height: calc(100vh - 190px);
    }
`

const Attribute = styled.li`
    display: flex; 
    flex-wrap: wrap;
    margin: 10px;
    span {
        color: ${colors.turkoise};
        margin-right: 5px;
    }
    b {
        margin-right: 5px;
    }
`

const Stack = styled.div`
    margin-right: 5px;
`

const Icon = styled.img`
    width: 1rem;
    margin-right: 2px;
`

const Project = () => {
    const { id } = useParams();
    const project = require('../../data/portfolio.json').filter(project => project.id === Number(id))[0];
    return (
        <>
            <Burger />
            <Navbar />
            <Container background={colors.white}>
                <Grid container>
                    <Grid item xs={12} lg={8}>
                        <Carousel pictures={project.illustrations.map(pic => require('../../ressources/portfolio/' + pic))} />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Meta>
                            <Title title={project.name} paddingTop={'40px'} rowMargin={'20px'}/>
                            <Attribute>
                                <span>&#10070;</span><b>Client: </b>
                                {project.client}
                            </Attribute>
                            <Attribute>
                                <span>&#10070;</span><b>Github: </b>
                                {project.github.link
                                    ? <Git href={project.github.link}>Click here!</Git>
                                    : project.github.name
                                }
                            </Attribute> 
                            <Attribute>
                                <span>&#10070;</span><b>Main stacks: </b>
                                {project.mainStacks.map((stack, i) => 
                                    <Stack key={i}>
                                        <Icon src={require('../../ressources/SVG/' + project.stackIcons[i])} alt={stack} />
                                        {stack},
                                    </Stack>
                                )}
                            </Attribute>
                            <br />
                            <Attribute>
                                <span>&#10070;</span><b>Description: </b>
                                <br />
                                <div dangerouslySetInnerHTML={{__html: project.description }} />
                            </Attribute>
                        </Meta>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Project;