import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CartModal } from '@/components/CartModal';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Cart Modal component', () => {
  it('Should quantity of product received', () => {

    const { getByText } = render(<CartModal quantity={1} />)

    expect(getByText('1')).toBeInTheDocument()

  });
}); 