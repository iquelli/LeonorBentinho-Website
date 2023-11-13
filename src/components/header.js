/**
 * Navigation bar of the website.
 *
 * Mobile and Desktop visualization is implemented.
 */

import React from "react"; 
import { FaHome } from 'react-icons/fa' 
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
import { menuData, menuDataEnglish } from "../data/menu-data"

const Header = ({ language, toggleLanguage, scrollToSection }) => {

  const menuItems = language === "pt" ? menuData : menuDataEnglish;

  return (
    <NavContainer>
        <Nav>
          <ImageLogo>
            <StaticImage src="../images/big-logo.png" alt="Logo" />
          </ImageLogo>
          <NavMenu>
            {menuItems.map((item, index) => (
              <NavLink key={index} onClick={(e) => { e.stopPropagation(); scrollToSection(item.link); }}>
                {item.title === 'Home' ? <FaHome /> : item.title}
              </NavLink>
            ))}
            <NavLink>
            <LanguageToggle onClick={toggleLanguage}>
              {language === "en" ? "EN" : "PT"}
            </LanguageToggle>
            </NavLink>
          </NavMenu>
        </Nav>
    </NavContainer> )
}

const LanguageToggle = styled.div`

`

const ImageLogo = styled.div`
  cursor: pointer;
  align-items:center;
  padding: 0 1rem;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  } 
`

const NavContainer = styled.div`

`

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 

  @media screen and (max-width: 768px) {
    height: 60px;
  } 
`

const NavLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 20px;
  cursor: pointer;
`

const NavMenu = styled.div`
  display:flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  } 
`
export default Header