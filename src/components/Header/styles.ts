import styled from "styled-components";
import { mobile } from "@/styles/responsive";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  height: 6.32rem;
  padding: 28px 65px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.blue};

  ${mobile({
  padding: '20px'
})};
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.9;
  color: ${({ theme }) => theme.textLight};
  
  ${mobile({
  fontSize: '2rem'
})};

  span{
    font-size: 20px;
    font-weight: 300;
    line-height: 1.9;
    margin-left: 5px;
  }
`;

export const ButtonCart = styled.button`
  width: 90px;
  height: 45px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.textLight};
  border: 1px solid ${({ theme }) => theme.textLight};

  &:hover{
    border: 1px solid ${({ theme }) => theme.blue};
  }

  span{
    font-size: 18px;
    font-weight: 700;
    line-height: 2.2;
  }
`;