import '@testing-library/jest-dom';
import { Footer } from '@/components/Footer';
import { render, screen } from '@testing-library/react';

describe('Footer component', () => {
  it("Shoud render component", () => {

    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()

  });

  it('Text exists in component', () => {

    render(<Footer />)

    expect(screen.getByText('MKS sistemas © Todos os direitos reservados.')).toBeInTheDocument();

  });
});