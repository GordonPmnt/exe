import React from 'react';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';

const Skill = ({ name, icon, description, skills, svg }) => {
    const displayedIcon = require(`../../ressources/SVG/${icon}`)
    return (
        <>
            <img src={displayedIcon} alt={name} />
            <p>{name}</p>
            <p>{description}</p>
        </>
    )
}

export default Skill;