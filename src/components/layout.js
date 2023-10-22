/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React, { useState } from "react"; 

import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Quote from "./quote"
import Service from "./service";
import { GlobalStyle } from "./styles/global-styles"
import styled from "styled-components"

const Layout = ({ children }) => {
  const [language, setLanguage] = useState("pt"); 

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === "pt" ? "en" : "pt");
  }

  return (
    <>
      <GlobalStyle />
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language}/>
      <SpaceBetween></SpaceBetween>
      <About language={language}/>
      <SpaceBetween></SpaceBetween>
      <Quote language={language}/>
      <SpaceBetween style={{ backgroundColor: 'rgba(136, 134, 132, 0.3)' }}></SpaceBetween>
      <Service language={language}/>
      <SpaceBetween></SpaceBetween>
      <main>{children}</main>
    </>
  )
}

const SpaceBetween = styled.div`
 height: 40px;
`

export default Layout
