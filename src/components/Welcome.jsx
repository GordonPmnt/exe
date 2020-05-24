import React from 'react';
import styled from 'styled-components';

const Welcome = () => {
    const Hero = styled.div`
        text-align: center;
        width: 100vw;
        height: 100vh;
    `

    return (
        <Hero>
            <p>Welcome to eXe</p>
        </Hero>
    )
}

export default Welcome;