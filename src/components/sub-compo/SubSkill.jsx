import React, { useState } from 'react';
import styled from 'styled-components';
import device from '../../styles/device';
import colors from '../../styles/colors';

const SubSkill = ({ subSkill, index, svg }) => {
    return (
        <li>
            <img src={require(`../../ressources/SVG/${svg[index]}`)} alt={subSkill} />
            <p>{subSkill}</p>
        </li>
    )
}

export default SubSkill;