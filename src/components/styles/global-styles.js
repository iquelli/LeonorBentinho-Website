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
	transition: background-color 0.3s, color 0.3s;

	&:hover {
    background-color: white;
    color: #a42c39;
  }
 }

 h1 {
  font-size: 1.5em; 
  font-weight: 600; 
  text-align: center;
 }

 p {
  font-size: 1.5em; 
 }

 textarea,
 input {
	width: 500px;
	padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #fff;
  border-radius: 4px;
	margin-top: 5px;

	@media screen and (max-width: 768px) {
    width: 300px;
  }
 }

 input {
	height: 35px;
 }

 label{
	font-size: 20px;
 }

`