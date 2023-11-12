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
              <p key={index}>{point}</p>
            </AboutText>
          ))}
      </AboutTextSection>

        <AboutImage>
          <StaticImage src="../images/portrait.jpg" alt="AboutImage" />
        </AboutImage>

    </AboutContent>

  </AboutSection>
  )
}

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2%;
  margin-right: 8%;
  margin-left: 8%;
`;

const Line = styled.div`
  width: 300px;
  height: 2px;
  background-color: #a42c39;

  @media screen and (max-width: 900px) {
    width: 150px;
    align-self: center;
  }
`;

const AboutTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  
  @media screen and (max-width: 900px) {
    width: 90%;
    align-self: center;
  }
`;

const AboutText = styled.div`
  font-size: 0.8em;
  text-align: justify;
  position: relative;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    font-size: 0.6em;
  }
`;

const AboutImage = styled.div`
  width: 400px;
  align-self: center;
  align-content: center;

  @media screen and (max-width: 900px) {
    width: 250px;
  }
`;

export default About 