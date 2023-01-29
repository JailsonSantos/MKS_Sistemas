import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { api } from "@/services/axios";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Product } from "@/components/Product";
import { Container, Main } from "@/styles/Home";
import { ProductsFake } from "@/data/ProductsFake";
import { SkeletonTheme } from "react-loading-skeleton";

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


export default function Home({ products }: ListProductsProps) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, []);

  return (
    <Container>
      <NextSeo
        title="Home | E-Commerce"
        description="E-commerce virtual."
      />
      <Header />
      <Main>
        <SkeletonTheme
          baseColor="rgba(238,238,238, 0.5)"
          highlightColor="rgba(0,128,178, 0.1)"
          borderRadius="0.5rem"
          width="217"
          height="288"
          duration={4}
        >
          {
            isLoading ?
              ProductsFake.map((product) => {
                return (
                  <Product key={product.id} product={product} isLoading={isLoading} />
                )
              })
              :
              products.map(product => {
                return (
                  <Product key={product.id} product={product} />
                )
              })
          }
        </SkeletonTheme>
      </Main>
      <Footer />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get('/products?page=1&rows=50&sortBy=id&orderBy=DESC');

  return {
    props: {
      products: data.products,
    },
    revalidate: 60 * 60 * 24, // 1 day

  }
}