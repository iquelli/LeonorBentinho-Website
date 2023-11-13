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
import Contact from "./contact";
import Footer from "./footer";
import { GlobalStyle } from "./styles/global-styles"
import styled from "styled-components"

const Layout = ({ children }) => {
  const [language, setLanguage] = useState("pt"); 

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === "pt" ? "en" : "pt");
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header language={language} toggleLanguage={toggleLanguage} scrollToSection={scrollToSection}/>
      <Hero id="home" language={language} scrollToSection={scrollToSection}/>
      <SpaceBetween></SpaceBetween>
      <About id="about" language={language}/>
      <SpaceBetween></SpaceBetween>
      <Quote language={language} scrollToSection={scrollToSection}/>
      <SpaceBetween style={{ backgroundColor: 'rgba(136, 134, 132, 0.3)' }}></SpaceBetween>
      <Service id="services" language={language}/>
      <SpaceBetween style={{ backgroundColor: '#A42C39', opacity: '90%'}} ></SpaceBetween>
      <Contact id="contact" language={language} />
      <SpaceBetween style={{ backgroundColor: '#A42C39', opacity: '90%'}}></SpaceBetween>
      <Footer></Footer>
      
      <main>{children}</main>
    </>
  )
}

const SpaceBetween = styled.div`
 height: 40px;
`

export default Layout
