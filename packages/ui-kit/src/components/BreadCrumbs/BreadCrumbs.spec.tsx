import React from 'react';
import { render } from '@testing-library/react';
import { BreadCrumbs } from './BreadCrumbs';

describe('Given `BreadCrumbs` component', () => {
  let wrapper: ReturnType<typeof render>;

  const stepsMock = [true, false, true, null, null];
  const currentStepMock = 3;

  describe('when it is rendered', () => {
    beforeEach(() => {
      wrapper = render(<BreadCrumbs steps={stepsMock} currentStep={currentStepMock} />)
    });

    it('should match snapshot', () => {
      expect(wrapper.baseElement).toMatchSnapshot();
    })
  })
});
