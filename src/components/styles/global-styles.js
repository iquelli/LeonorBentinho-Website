import { createGlobalStyle } from "styled-components";
import LibreBaskervilleFont from "../fonts/librebaskerville.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Libre Baskerville';
    src: url(${LibreBaskervilleFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

 * {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Libre Baskerville', sans-serif;
 }
`