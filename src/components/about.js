import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const About = ({ language }) => {
  return (

    <AboutSection>

    <AboutTitleSection>
      <StaticImage src="../images/auction.png" alt="Hero-Image" width={35}/>
      <h1>Sobre Leonor</h1>
      <Line></Line>
      
    </AboutTitleSection>

    <AboutTextSection>
      <AboutText>
        <p>About Text</p>
      </AboutText>

      <AboutImage>

      </AboutImage>

    </AboutTextSection>

  </AboutSection>
  )
}

const AboutSection = styled.div`
 display: flex;
 flex-direction: column;
`

const AboutTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`

const Line = styled.div`
  width: 300px;
  height: 2px;
  background-color: #A42C39;
`

const AboutTextSection = styled.div`

`

const AboutText = styled.div`

`

const AboutImage = styled.div`

`

export default About 