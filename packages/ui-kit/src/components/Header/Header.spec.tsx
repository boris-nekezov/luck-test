import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Given `Header` component', () => {
  let wrapper: ReturnType<typeof render>;

  describe('when it is rendered', () => {
    beforeEach(() => {
      wrapper = render(<Header />);
    });

    it('should match snapshot', () => {
      expect(wrapper.baseElement).toMatchSnapshot();
    })
  })
});
