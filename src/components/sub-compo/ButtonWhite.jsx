import device from '../../styles/device';
import colors from '../../styles/colors';
import styled from 'styled-components';

const ButtonWhite = styled.a`
    margin-top: 20px;
    border: 3px solid #fff;
    text-decoration: none;
    background: transparent;
    font-size: 1.4rem;
    text-align: center;
    padding: 8px 20px;
    font-family: "Raleway", sans-serif;
    color: #616161;
    transition: all 0.5s;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${colors.turkoise};
        border-color: ${colors.turkoise};
        color: #fff;
    }
    &:focus {
        outline: none;
    }

    @media ${device.laptop} {
        font-size: 2rem;
    }
`

export default ButtonWhite;