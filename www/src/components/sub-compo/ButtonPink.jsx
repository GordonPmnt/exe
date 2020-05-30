import styled from 'styled-components';
import colors from '../../styles/colors';

const ButtonPink = styled.button`
    color: #fff;
    padding: 5px 20px;
    margin: 0 5px;
    transition: all 0.5s;
    background-color: ${colors.turkoise};
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: ${colors.pinkMexican};
    }

    &:focus {
        outline: none;
      }
`

export default ButtonPink;