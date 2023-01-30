import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { Product } from '@/components/Product';
import { render } from '@testing-library/react';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Product component', () => {
  it('Should name of products received', () => {

    const newProduct = {
      id: 1,
      name: "Smart Watch",
      brand: "Mobile",
      description: "Product imported",
      photo: "http://www.smartwatch.com",
      price: "9000"
    }

    const { queryAllByText } = render(<Product product={newProduct} />)

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Smart Watch')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Mobile')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('Product imported')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('http://www.smartwatch.com/image.png')
    }));

    expect(screen.queryAllByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.startsWith('9000')
    }));

  });

}); 