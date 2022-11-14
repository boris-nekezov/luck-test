import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Given `Input` component', () => {
  const mockFn = jest.fn();
  let wrapper: ReturnType<typeof render>;


  describe('when it is rendered', () => {
    beforeEach(() => {
      wrapper = render(<Input
        label='User email'
        name='email'
        handleChange={mockFn}
      />);
    });

    it('should match snapshot', () => {
      expect(wrapper.baseElement).toMatchSnapshot();
    })
  })
});
