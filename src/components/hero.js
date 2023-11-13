import React from "react"; 
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Hero = ({ language }) => {

  const getTextContent = () => {
    if (language === 'en') {
      return {
        title: "Get highly qualified legal help.",
        description: "Leonor Bentinho, a lawyer with over 20 years of experience in Portugal.",
        contactButton: "Contact Me"
      };
    } else {
      return {
        title: "Obtenha ajuda legal altamente qualificada.",
        description: "Leonor Bentinho, advogada com mais de 20 anos de experiência em Portugal.",
        contactButton: "Contacte-me"
      };
    }
  }

  const content = getTextContent();

  return (
    <HeroContainer>
        
        <StaticImage src="../images/justice-lady.png" alt="Hero-Image" style={{ width: "100%", height: "100%", marginTop: "60px",}}/>
            
        <OverlayContent>

          <Title>{content.title}</Title>

          <Description>{content.description}</Description>

          <ContactMeButton>
            <button>{content.contactButton}</button>
          </ContactMeButton>

        </OverlayContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: grey;
`

const OverlayContent = styled.div`
  position: absolute;
  align-items: center;
  color: white;
`
const Title = styled.div`
  font-size: 2em; 
  font-weight: 550; 
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const Description = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const ContactMeButton = styled.div`
  margin-top: 20px;
  align-self: center;
  margin-top: 40px;
`

export default Hero