import React, { useState } from "react"; 
import styled from "styled-components"
import * as quoteData from "../data/quote-data"
import backgroundImage from "../images/quote-bg.jpg";

const Quote = ({ language, scrollToSection }) => {

  const buttonText = quoteData.quoteButtonData[language];
  const quoteText = quoteData.quoteText[language];

  return (
    <QuoteContainer>
      <QuoteText>"{quoteText}"</QuoteText>
      <QuoteButton onClick={(e) => { e.stopPropagation(); scrollToSection("contact"); }}>{buttonText}</QuoteButton>
    </QuoteContainer>
  )
}

const QuoteContainer = styled.div`
  background-image: url(${backgroundImage}); /* Set the background image */
  background-size: cover; /* Adjust the size of the background image */
  background-position: center; /* Center the background image */
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const QuoteText = styled.h1`
  color: white;
  font-size: 1.4em;
  margin-bottom: 20px;
  width: 95%;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const QuoteButton = styled.button`
  width: 170px;
  height: 50px;

  @media screen and (max-width: 768px) {
    width: 110px;
    height: 40px;
    font-size: 14px;
  }
`

export default Quote