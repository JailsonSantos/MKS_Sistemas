import Home from '@/pages';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { ProductsFake } from '@/data/ProductsFake';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Home component', () => {
  it("Shoud render component", () => {

    const { container } = render(<Home products={ProductsFake} />)

    expect(container).toMatchSnapshot()

  });

  it('List exits in component', () => {

    render(<Home products={ProductsFake} />)

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Headset Cloud Stinger')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Headset Cloud Revolver')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('iPad')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Apple Watch Series 7')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('iPhone 12 64 GB')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Macbook Air')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('AirPods')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Iphone 11 128 GB')
    }));

  });
});