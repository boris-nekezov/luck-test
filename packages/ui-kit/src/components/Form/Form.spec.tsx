import React from 'react';
import { render } from '@testing-library/react';
import { Form } from './Form';

describe('Given `Form` component', () => {
  const mockFn = jest.fn();
  let wrapper: ReturnType<typeof render>;


  describe('when it is rendered', () => {
    beforeEach(() => {
      wrapper = render(<Form
        handleSubmit={mockFn}>
        <h2>Some form</h2>
      </Form>);
    });

    it('should match snapshot', () => {
      expect(wrapper.baseElement).toMatchSnapshot();
    })
  })
});
