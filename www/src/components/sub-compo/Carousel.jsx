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
    opacity 0.5;
  }

  @media ${device.laptop} {
    height: calc(100vh - 185px);
  }
`

const Picture = styled.img`
  display: block;
  width: 100%;

  @media ${device.laptop} {
    height: calc(100vh - 185px);
  }
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
        style={{ position: 'relative', bottom: '50px' }}
        steps={maxSteps}
        position="static"
        variant="dots"
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