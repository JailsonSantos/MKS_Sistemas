import styled from "styled-components";
import { mobile, tablet } from "./responsive";

export const Container = styled.div`
  flex: 1;
`;

export const Main = styled.main`
  flex: 1;
  gap: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 40px auto;
  max-width: 1024px;
  padding-left: 50px;

  ${tablet({
  width: '100%',
  paddingLeft: '50px',
  justifyContent: 'flex-start'
})};
  
  ${mobile({
  width: '100%',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: '0',
  flexDirection: 'column',
})};

`;
