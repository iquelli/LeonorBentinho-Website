import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components";

const Footer  = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>

      <WebsiteRights>
        &copy; {currentYear} -
      </WebsiteRights>
      <WebsiteCredits>
        Website <StaticImage src="../images/github.png" alt="GitHub Logo" style={{width:"15px"}}/> by <GitHubLink href="https://github.com/iquelli" target="_blank" rel="noopener noreferrer">iquelli</GitHubLink>
      </WebsiteCredits>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A42C39;
  padding: 10px;
  color: white;
`

const WebsiteRights = styled.p`
  margin: 0;
  font-size: 15px;
  margin-right: 10px;
`

const WebsiteCredits = styled.p`
  margin: 0;
  font-size: 15px;
  align-items: center;
`

const GitHubLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default Footer;