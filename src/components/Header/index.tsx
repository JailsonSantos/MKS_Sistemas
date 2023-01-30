
import { CartModal } from '../CartModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Container, Logo } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {

  const cart = useSelector((state: RootState) => state.cart);

  const quantity = cart?.quantity;

  return (
    <Container>
      <div>
        <Logo>
          MKS <span>Sistemas</span>
        </Logo>
      </div>

      <Dialog.Root>
        <CartModal quantity={quantity} />
      </Dialog.Root>

    </Container>
  )
}