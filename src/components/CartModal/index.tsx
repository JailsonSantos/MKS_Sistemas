import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { CartProduct } from '../CartProduct';
import { ShoppingCart, X } from "phosphor-react";
import { blackA, mauve } from '@radix-ui/colors';
import { styled, keyframes } from '@stitches/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import {
  AreaTotalCart,
  BodyModal,
  ButtonCart,
  ConfirmPaymentCart,
  EmptyBodyCart,
  FooterCart,
  HeaderModal
} from './styles';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: '#0F52BA',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '0%',
  right: '0%',
  transform: 'translate(0%, 0%)',
  width: '85%',
  maxWidth: '486px',
  height: '100%',
  padding: '0',
  '&:focus': { outline: 'none' },
});

function Content({ children, ...props }: any) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  fontSize: 17,
  fontWeight: 700,
  color: '#ffffff',
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  fontSize: 15,
  lineHeight: 1.5,
  marginBottom: 20,
  textAlign: 'center',
  color: mauve.mauve11,
});

// Exports
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

// Your app...
const Flex = styled('div', { display: 'flex' });

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 5px',
  fontSize: 16,
  lineHeight: 1,
  fontWeight: 500,
  border: 'none',

  variants: {
    variant: {
      addProductInCart: {
        backgroundColor: 'transparent',
        color: '#005693',
        '&:hover': { cursor: 'pointer' },
        '&:focus': { outline: 'none' },
      },
      cancel: {
        backgroundColor: '#000000',
        border: '1px solid #000000',
        color: '#ffffff',
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        padding: 0,
        '&:hover': {
          cursor: 'pointer',
          color: '#ffffff',
          border: '1px solid #ffffff',
          transition: 'all 0.2s ease',
        },
        '&:focus': { outline: 'none' },
      },
    },
  },
});

interface CartModalProps {
  quantity: number;
}

export function CartModal({ quantity }: CartModalProps) {

  const cart = useSelector((state: RootState) => state.cart);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>

        <ButtonCart>
          <ShoppingCart size={24} weight="bold" />
          <span>{quantity}</span>
        </ButtonCart>

      </AlertDialogTrigger>
      <AlertDialogContent >

        <HeaderModal >
          <AlertDialogTitle css={
            {
              width: '100%',
              fontSize: '27px',
              fontWeight: '700',
              lineHeight: '32px',
            }
          }>
            Carrinho {<br />}
            de compras
          </AlertDialogTitle>
          <Flex css={{ cursor: 'pointer' }}>
            <AlertDialogCancel asChild>
              <Button variant="cancel">
                <X size={24} />
              </Button>
            </AlertDialogCancel>
          </Flex>
        </HeaderModal>

        <BodyModal>
          {
            cart.quantity > 0 ?
              cart?.products?.map(product => (
                <CartProduct key={product.id} product={product} />
              ))
              :
              <EmptyBodyCart>
                O carrinho está vazio, {<br />}
                Por favor Adicione algum produto.
              </EmptyBodyCart>
          }
        </BodyModal>

        <FooterCart>
          <AreaTotalCart>
            <span>
              Total
            </span>
            <span>
              R$ {cart.total.toFixed(2)}
            </span>
          </AreaTotalCart>

          <ConfirmPaymentCart total={cart.total}>
            Finalizar Compra
          </ConfirmPaymentCart>
        </FooterCart>
      </AlertDialogContent>
    </AlertDialog>
  );
}