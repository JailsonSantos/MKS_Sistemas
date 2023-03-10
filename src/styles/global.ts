import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.blue};
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.blue)};
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }
  
  img {
    width: 100%;
    max-width: 100%;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textDark};
  }
`;