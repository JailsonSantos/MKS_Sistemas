import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 217px;
  display: flex;
  height:  288px;
  border-radius: 8px;  
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.textLight};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  &:hover{
    transition: all 0.5s ease;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const AreaProduct = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  border-radius: 8px 8px 0 0;  
  justify-content: space-between;
`;

export const AreaDescriptionPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageProduct = styled.img`
  width: 111px;
  height: 138px;
`;

export const TitleProduct = styled.span`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;
  color: ${({ theme }) => theme.shade};
`;

export const PriceProduct = styled.span`
  width: 120px;
  height: 26px;
  display: flex;
  border-radius: 5px;
  align-items: center; 
  justify-content: center;
    
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  
  color: ${({ theme }) => theme.textLight};
  background: ${({ theme }) => theme.backgroundSecondary};
`;

export const DescriptionProduct = styled.span`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  color: ${({ theme }) => theme.shade};
`;

export const FooterProduct = styled.button`
  all: unset;
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

  &:hover{
    cursor: pointer;
    transition: all 0.5s ease;
    border: 1px solid ${({ theme }) => theme.blueLight};  
    background-color: ${({ theme }) => theme.blueLight};
  }

  &:focus{
    border: 1px solid ${({ theme }) => theme.shade};
  }

  svg{
    margin-right: 10px;
  }
`;
