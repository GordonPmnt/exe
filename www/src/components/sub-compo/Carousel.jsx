import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import colors from '../../styles/colors';
import device from '../../styles/device';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Container = styled.div`
  .MuiPaper-root {
    background: ${colors.darkerWhite};
  }

  @media ${device.laptop} {
    height: calc(100vh - 190px);
    width: calc(100% - 75px);
  }
`

const Picture = styled.img`
  display: block;
  overflow: 'hidden';
  width: 100%;
`

const CarouselButton = styled(Button)`
  &:hover {
    color: ${colors.pinkMexican};
  }
`

const Carousel = ({ pictures }) => {
  const [ activeStep, setActiveStep ] = React.useState(0);
  const maxSteps = pictures.length;
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Container>
      <AutoPlaySwipeableViews
        axis='x'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {pictures.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Picture src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <CarouselButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {<KeyboardArrowRight />}
          </CarouselButton>
        }
        backButton={
          <CarouselButton size="small" onClick={handleBack} disabled={activeStep === 0}>
            {<KeyboardArrowLeft />}
            Back
          </CarouselButton>
        }
      />
    </Container>
  );
}

export default Carousel;