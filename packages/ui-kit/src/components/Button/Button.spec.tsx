import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Given `Button` component', () => {
  const mockFn = jest.fn();
  let wrapper: ReturnType<typeof render>;


  describe('when it is rendered', () => {
    beforeEach(() => {
      wrapper = render(<Button
        type="button"
        handleClick={mockFn}
      />);
    });

    it('should match snapshot', () => {
      expect(wrapper.baseElement).toMatchSnapshot();
    })
  })
});
