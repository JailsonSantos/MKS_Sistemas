import { useState } from "react";
import { useDispatch } from "react-redux";
import { Minus, Plus, X } from "phosphor-react";
import { addTotal, deleteProduct, minusTotal } from "@/redux/cartRedux";
import {
  AreaButtonCart,
  AreaDescriptionPrice,
  AreaProduct,
  AreaQuantityProduct,
  CloseButtonCart,
  ProductButton,
  ProductQuantity,
  Container,
  ImageProduct,
  PriceProduct,
  TitleProduct
} from "./styles";

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
    quantityOfProduct: number;
  }
}

export function CartProduct({ product }: ProductProps) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(product.quantityOfProduct);

  const handleUpdateQuantityOfProduct = (type: string) => {
    if (type === "desc") {
      if (quantity > 1) {
        setQuantity(quantity - 1)

        const newTotal = 1 * Number(product.price)

        const newProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          photo: product.photo,
          price: product.price,
          quantityOfProduct: quantity - 1
        }

        dispatch(
          minusTotal(
            {
              ...newProduct,
              total: newTotal,
            }
          )
        );

      }
    } else {
      setQuantity(quantity + 1)

      const newTotal = 1 * Number(product.price)

      const newProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        photo: product.photo,
        price: product.price,
        quantityOfProduct: quantity + 1
      }

      dispatch(
        addTotal(
          {
            ...newProduct,
            total: newTotal,
          }
        )
      );
    }
  }

  const handleDeleteProductOfCart = () => {
    dispatch(
      deleteProduct(
        {
          ...product,
        }
      )
    );
  }

  let priceTotal = (quantity * Number(product.price)).toFixed(2);

  return (
    <Container>
      <AreaProduct>
        <ImageProduct src={product.photo} alt="Apple Watch" />
        <AreaDescriptionPrice>
          <TitleProduct>{product.name}</TitleProduct>
          <div>
            <AreaButtonCart>
              <span>Qtd:</span>
              <AreaQuantityProduct>
                <ProductButton onClick={() => handleUpdateQuantityOfProduct("desc")} >
                  <Minus size={16} weight="bold" />
                </ProductButton>

                <ProductQuantity>{product.quantityOfProduct}</ProductQuantity>

                <ProductButton onClick={() => handleUpdateQuantityOfProduct("inc")}>
                  <Plus size={16} weight="bold" />
                </ProductButton>
              </AreaQuantityProduct>
            </AreaButtonCart>
            <PriceProduct>RS {priceTotal}</PriceProduct>
          </div>
        </AreaDescriptionPrice>
      </AreaProduct>
      <CloseButtonCart onClick={handleDeleteProductOfCart}>
        <X />
      </CloseButtonCart>
    </Container>
  )
}
