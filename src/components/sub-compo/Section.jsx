import styled from 'styled-components';

const Section = styled.section`
    background-color: ${({ background }) => background };
    ${({ width }) => width ? 'width: ' + width + ';' : '' }
    ${({ height }) => height ? 'height: ' + height + ';' : '' }
`

export default Section;