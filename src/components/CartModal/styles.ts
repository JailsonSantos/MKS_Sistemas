import { lighten } from "polished";
import styled from "styled-components";
import { mobile } from "@/styles/responsive";

interface ConfirmPaymentCartProps {
  total: number;
}

export const Container = styled.div``;

export const HeaderModal = styled.div`
  display: flex;
  height: 6.32rem;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;

  svg{
    ${mobile({
  color: '#0F52BA',
})}
  }
`;

export const BodyModal = styled.div`
  gap: 5px;
  height: 60%;
  display: flex;
  padding: 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar { 
	  display: none;
  }
`;

export const ButtonCart = styled.button`
  all: unset;
  width: 90px;
  height: 45px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.textLight};
  border: 1px solid ${({ theme }) => theme.textLight};

  &:hover{
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.blue};
  }

  &:focus{
    border: 1px solid ${({ theme }) => theme.shade};
  }

  span{
    font-size: 18px;
    font-weight: 700;
    line-height: 2.2;
  }
`;

export const FooterCart = styled.div`
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  position: absolute; 
  flex-direction: column;
`;

export const AreaTotalCart = styled.div`
  height: 60px;
  display: flex; 
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    color: ${({ theme }) => theme.textLight};

    ${mobile({
  fontSize: '1rem',
})}
  }

  ${mobile({
  bottom: 60,
  width: '100%',
  position: 'relative',
})}
`;

export const ConfirmPaymentCart = styled.button<ConfirmPaymentCartProps>`
  width: 100%;
  height: 60px;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;

  cursor: ${({ total }) => total === 0 && 'not-allowed'};
  color: ${({ total, theme }) => total === 0 ? theme.border : theme.textLight};
  border-color: ${({ total, theme }) => total === 0 ? theme.shade : theme.textDark};
  background-color: ${({ total, theme }) => total === 0 ? theme.shade : theme.textDark};
  
  &:hover{
    transition: all 0.2s ease;
    border-color: ${({ total, theme }) => total !== 0 && lighten(0.05, theme.textDark)};
    background-color: ${({ total, theme }) => total !== 0 && lighten(0.05, theme.textDark)};
  }

  ${mobile({
  bottom: 0,
  position: 'absolute',
})}
`;
