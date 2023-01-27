import { NextSeo } from 'next-seo';
import { api } from "@/services/axios";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Product } from "@/components/Product";
import { Container, Main } from "@/styles/Home";
import { ProductsFake } from "@/data/ProductsFake";
import { SkeletonTheme } from "react-loading-skeleton";

interface ListProductsProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

export default function Home() {

  const [listProducts, setListProducts] = useState<ListProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function handleGetAllProducts() {
    try {
      setIsLoading(true);

      const response = await api.get('/products?page=1&rows=50&sortBy=id&orderBy=DESC');
      setListProducts(response.data.products);

    } catch (error) {
      console.log("Errors => ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handleGetAllProducts()
    }, 1000)
  }, [])

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
              listProducts.map(product => {
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
