import React from 'react';
import '@testing-library/jest-dom';
import { Header } from '@/components/Header';
import { render, screen } from '@testing-library/react';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Header component', () => {

  it("Shoud render component", () => {

    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()

  });

  it('Text of Logo exists in component', () => {

    render(<Header />)

    const div = screen.getAllByText(/MKS/i);
    const span = screen.getAllByText(/sistemas/i);

    expect(div[0]).toMatchSnapshot();
    expect(span[1]).toMatchSnapshot();

  });
});