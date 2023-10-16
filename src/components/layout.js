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
      <main>{children}</main>
    </>
  )
}

const SpaceBetween = styled.div`
 height: 40px;
`

export default Layout
