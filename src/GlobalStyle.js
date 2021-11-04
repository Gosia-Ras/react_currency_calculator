import { createGlobalStyle } from "styled-components";
import img from "./background-calculator.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
     }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    background-size: cover;
    background-image: url(${img});
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Oxygen', sans-serif;
  }`;
