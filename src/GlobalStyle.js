import { createGlobalStyle } from "styled-components";
import background_img from "./money.jpeg"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
     }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #root {
    background-size: cover;
    background-image: url(${background_img});
    background-position: center;
    color: #343F51;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Titillium Web', sans-serif;
  }`;
