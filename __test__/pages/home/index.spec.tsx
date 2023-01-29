import React from 'react';
import Home from '@/pages';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface ListProductsProps {
  products: Product[];
}

describe('Home page', () => {
  it('Should render properly', () => {

    const products: ListProductsProps = {
      products: [{
        id: 8,
        name: "Headset Cloud Stinger",
        brand: "HyperX",
        description: "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
        photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
        price: "600.00",
      }
      ]
    }

    render(<Home products={[]} />);

    const header = screen.getByRole('heading')
    const headerText = 'Hello World!'

    expect(header).toHaveTextContent(headerText)
  });
});