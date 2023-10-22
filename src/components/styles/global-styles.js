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

 button {
  color: white;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: #A42C39;
  height: 45px;
  font-size: 17px;
  width: 150px;
  
  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 100px;
    height:30px;
  }
 }

 h1 {
  font-size: 2em; 
  font-weight: 600; 
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
 }

 p {
  font-size: 1.5em; 
 }

`