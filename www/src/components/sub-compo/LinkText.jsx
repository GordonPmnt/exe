import styled from 'styled-components';
import colors from '../../styles/colors';

const LinkText = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 5px 15px;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        color: ${colors.pinkMexican};
    }
`

export default LinkText;