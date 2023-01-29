import { useDispatch } from "react-redux";
import { ShoppingBag } from "phosphor-react";
import Skeleton from 'react-loading-skeleton';
import { addProduct } from "@/redux/cartRedux";
import 'react-loading-skeleton/dist/skeleton.css';
import { Fragment, PropsWithChildren } from "react";

import {
  Container,
  AreaProduct,
  ImageProduct,
  PriceProduct,
  TitleProduct,
  FooterProduct,
  DescriptionProduct,
  AreaDescriptionPrice,
} from "./styles";

interface ProductProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  },
  isLoading?: boolean;
}

import toast, { Toaster } from 'react-hot-toast';

export function Product({ product, isLoading }: ProductProps) {

  const dispatch = useDispatch();

  const notify = () => toast('Produto adicionado ao carrinho.');

  const handleAddNewProductToCart = () => {
    const priceFormatted = Number(product.price);
    const total = 1 * priceFormatted;

    const newProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      photo: product.photo,
      price: product.price,
      quantityOfProduct: 1
    }

    dispatch(
      addProduct(
        {
          ...newProduct,
          quantity: 1,
          total,
        }
      )
    );

    notify();
  };

  function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
    return <span style={{ marginLeft: '0.2rem' }}>{children}</span>
  }

  return (
    <Container>
      <AreaProduct>
        {
          isLoading ?
            <Fragment>
              <Skeleton
                width="111px"
                height="138px"
              />

              <Skeleton
                width="100px"
                height="30px"
                borderRadius="0.5rem"
                wrapper={InlineWrapperWithMargin}
                count={2}
                inline
              />

              <Skeleton
                width="210px"
                height="50px"
                borderRadius="0.5rem"
              />
            </Fragment>
            :
            <Fragment>

              <ImageProduct src={product.photo} alt="Apple Watch" />

              <AreaDescriptionPrice>
                <TitleProduct>{product.name}</TitleProduct>
                <PriceProduct>RS {product.price}</PriceProduct>
              </AreaDescriptionPrice>

              <DescriptionProduct> {product.description}</DescriptionProduct>

            </Fragment>
        }
      </AreaProduct>

      {
        isLoading ?

          <Skeleton
            width="220px"
            height="35px"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: '0.5rem',
              borderBottomRightRadius: '0.5rem',
              position: 'relative',
              bottom: -10,
            }}
          />
          :
          <FooterProduct onClick={handleAddNewProductToCart}>
            <Toaster
              toastOptions={{
                style: {
                  background: "#28a745", color: '#FFFFFF',
                },
                duration: 1500
              }}
            />
            <ShoppingBag size={24} weight="bold" color="#FFFFFF" />
            COMPRAR
          </FooterProduct>
      }
    </Container>
  )
}