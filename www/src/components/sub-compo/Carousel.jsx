import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import colors from '../../styles/colors';
import device from '../../styles/device';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Container = styled.div`
`

const Picture = styled.img`
  display: block;
  width: 100%;

  @media ${device.laptop} {
    min-height: calc(100vh - 250px);
    width: 100%;
    margin-top: 2.5%;
  }
`

const Carousel = ({ pictures }) => {
  const [ activeStep, setActiveStep ] = React.useState(0);
  const maxSteps = pictures.length;

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Container>
      <AutoPlaySwipeableViews
        axis='x'
        index={activeStep}
        interval={5000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {pictures.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Picture src={pictures[index]} alt={index} />
              ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Container>
  );
}

export default Carousel;