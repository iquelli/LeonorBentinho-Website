/**
 * About me section of the website
 *
 * Mobile and Desktop visualization is implemented.
 */

import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import * as aboutData from "../data/about-data"

const About = ({ language }) => {

  const aboutText = aboutData.aboutTextData[language];
  const aboutTitle = aboutData.aboutTitleData[language];

  return (
    <AboutSection>

    <AboutTitleSection>
      <StaticImage src="../images/auction.png" alt="Hero-Image" width={35}/>
      <h1>{aboutTitle}</h1>
      <Line></Line>
      
    </AboutTitleSection>

    <AboutContent>
      <AboutTextSection>
          {aboutText.map((point, index) => (
            <AboutText>
            <p key={index}>
              {point}
            </p>
            </AboutText>
          ))}
      </AboutTextSection>

        <AboutImage>
          <StaticImage src="../images/big-logo.png" alt="Hero-Image" />
        </AboutImage>

    </AboutContent>

  </AboutSection>
  )
}

const AboutSection = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`

const AboutTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`

const Line = styled.div`
  width: 300px;
  height: 2px;
  background-color: #A42C39;
`

const AboutTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`

const AboutText = styled.div`
  position: relative;
  margin-left: 30px; /* Adjust the spacing between the bullet point and text */
  padding-left: 30px; /* Adjust the spacing between the bullet point and text */
  
  &::before {
    content: "\\2022"; /* Unicode character for bullet point (•) */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #A42C39; 
    font-size: 2.1em; /*  Bullet point size */
  }
`

const AboutImage = styled.div`

`

export default About 