import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.footer};

  span{
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    color: ${({ theme }) => theme.textDark};
  }
`;