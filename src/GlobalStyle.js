import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
     }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    
    color: ${({ theme }) => theme.colors.fontMain};
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundMain};;
  }`;
