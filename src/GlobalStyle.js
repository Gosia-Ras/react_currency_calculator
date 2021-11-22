import { createGlobalStyle } from "styled-components";
import background_img from "./money.jpeg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
     }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background: url(${background_img}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  #root {
    color: ${({ theme }) => theme.color.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Titillium Web', sans-serif;
  }`;
