/**
 * Navigation bar of the website.
 *
 * Mobile and Desktop visualization is implemented.
 */

import React, { useState } from "react"; 
import { FaBars, FaHome } from 'react-icons/fa' 
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
import { menuData } from "../data/menu-data"
import { menuDataEnglish } from "../data/menu-data"
import { Link } from "gatsby"

const Header = ({ language, toggleLanguage }) => {
  
  const menuItems = language === "pt" ? menuData : menuDataEnglish;

  return (
    <Nav>
      <ImageLogo>
        <StaticImage src="../images/big-logo.png" alt="Logo" />
      </ImageLogo>
      <Bars />
      <NavMenu>
        {menuItems.map((item, index) => (
          <NavLink to={item.link} key={index}>
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
  )
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

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 60px;
  } 
`

const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  } 
`

const NavLink = styled(Link)`
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