import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import AdvancedStepper   from './advanced-stepper';
import { ThemeProvider } from 'styled-components';
import Button from '../button/button';
import Text from '../typography';
import Container from '../container';
import advancedStepperTheme from '../theme/styles/advancedStepper';
import GlobalStyle from '../theme/globalStyles';
import '../icomoon_icons.css';
import { Flex } from 'rebass/';

export default {
  component: AdvancedStepper,
  title: 'AdvancedStepper'
} as Meta ;


export const Example = () => {
    const [count, setCount] = useState(1);

    return (
      <ThemeProvider theme={advancedStepperTheme}>
        <GlobalStyle />
        <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <AdvancedStepper value={count} total={5} />
          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}>
              Previous
            </Button>
            <Button
              disabled={count === 5}
              variant={count === 5 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 5) {
                  setCount(count + 1);
                }
              }}>
              Next
            </Button>
          </Flex>
        </Container>
      </ThemeProvider>
    );
  };

  export const StepperThemes = () => {
    const [count, setCount] = useState(1);

    return (
      <ThemeProvider theme={advancedStepperTheme}>
        <GlobalStyle />
        <Text fontSize="fontSizeH2">Advanced Stepper</Text>
        <Container>
          <Text>Primary Theme</Text>
          <AdvancedStepper variant="primary" value={count} total={5} />
          <Text>Secondary Theme</Text>
          <AdvancedStepper variant="secondary" value={count} total={5} />
          <Text>Success Theme</Text>
          <AdvancedStepper variant="success" value={count} total={5} />
          <Text>Dark Theme</Text>
          <AdvancedStepper variant="danger" value={count} total={5} />
          <Flex mt={20}>
            <Button
              disabled={count === 1}
              variant={count === 1 ? 'disabled' : 'primary'}
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}>
              Previous
            </Button>
            <Button
              disabled={count === 5}
              variant={count === 5 ? 'disabled' : 'secondary'}
              onClick={() => {
                if (count < 5) {
                  setCount(count + 1);
                }
              }}>
              Next
            </Button>
          </Flex>
        </Container>
      </ThemeProvider>
    );
  };