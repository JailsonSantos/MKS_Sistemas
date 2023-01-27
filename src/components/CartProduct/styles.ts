import styled from "styled-components";
import { mobile } from "@/styles/responsive";

export const Container = styled.div`
  padding: 0;
  width: 420px;
  height: 95px;
  display: flex;
  border-radius: 8px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.textLight};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  ${mobile({
  width: '250px',
  height: '220px',
  justifyContent: 'flex-start',
})}
`;

export const AreaProduct = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;  
  justify-content: space-between;

  ${mobile({
  width: '100%',
  height: '100%',
  flexDirection: 'column',
})}
`;

export const AreaDescriptionPrice = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})}
  }

  ${mobile({
  flexDirection: 'column',
})}
`;

export const ImageProduct = styled.img`
  width: 45px;
  height: 60px;

  ${mobile({
  width: '80px',
  height: '100px',
})}
`;

export const TitleProduct = styled.span`
  font-size: 1rem;
  min-width: 130px;
  max-width: 130px;
  font-weight: 400;
  line-height: 19px;
  color: ${({ theme }) => theme.shade};
  
  ${mobile({
  maxWidth: '100%',
  textAlign: 'center',
  fontSize: '0.875rem',
})}
`;

export const PriceProduct = styled.span`
  height: 26px;
  width: 120px;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  align-items: center; 
  justify-content: center;
  color: ${({ theme }) => theme.textDark};
`;

export const DescriptionProduct = styled.span`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  color: ${({ theme }) => theme.shade};
`;

export const FooterProduct = styled.button`
  width: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  border-radius:0 0 8px 8px;  
  color:${({ theme }) => theme.textLight};
  border: 1px solid ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.blue};

  svg{
    margin-right: 10px;
  }
`;

export const AreaButtonCart = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
    
  span{
    font-size: 10px;
    line-height: 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.textDark};
    
    ${mobile({
  display: 'none'
})}
  }

  button{ 
    width: 90px;
    border: none;
    display: flex;
    padding: 6px 0;
    font-size: 8px;
    font-weight: 400;
    line-height: 10px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.textDark};

    svg{
      color: ${({ theme }) => theme.textDark};
    }
    
    &:hover{
      color: gray;

      svg{
        color: gray;
      }
    }
  }
`;

export const AreaQuantityProduct = styled.div`
  width: 90px;
  height: 38px;
  padding: 8px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.textLight};
  border: 0.3px solid ${({ theme }) => theme.border};
`;

export const ProductButton = styled.button`
    border: none;
    outline: none;
    display: flex;
    width: 0.875rem;
    height: 0.875rem;
    align-items: center;
    justify-content: center;
    background: transparent;
`;

export const ProductQuantity = styled.p`
  margin: 0 10px;
  padding: 0 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 10px;
  color: ${({ theme }) => theme.textDark};
  border-left: 1px solid ${({ theme }) => theme.border};
  border-right: 1px solid ${({ theme }) => theme.border};
`;


export const CloseButtonCart = styled.button`
  position: relative;
  top: -40px;
  right: -5px;

  padding: 0;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.textDark};
  border: 1px solid ${({ theme }) => theme.textDark};

  svg{
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.textLight};
   
    ${mobile({
  width: '2rem',
  color: '#000000',
})}
  }

  &:hover{
    border: 1px solid ${({ theme }) => theme.textLight};
  }

  ${mobile({
  all: 'unset',
  top: '-70px',
  right: '20px',
  position: 'relative',
})}
`;