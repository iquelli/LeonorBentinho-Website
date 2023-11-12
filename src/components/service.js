/**
 * Services section of the website
 *
 * Mobile and Desktop visualization is implemented.
 */

import React from "react"; 
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import * as serviceData from "../data/service-data"

import publicImage from "../images/public.png";
import businessImage from "../images/business.png";
import familyImage from "../images/family.png";
import suitcaseImage from "../images/suitcase.png";
import disputeImage from "../images/dispute.png";
import criminalImage from "../images/criminal.png";

const servicesImages = [
  publicImage,
  businessImage,
  familyImage,
  suitcaseImage,
  disputeImage,
  criminalImage,
];

const Service = ({ language }) => {

  const title = serviceData.serviceTitleData[language];
  const helptext = serviceData.serviceHelpData[language];
  const services = serviceData.servicesAvailable[language];
  

  return (

    <ServiceSection>
      <ServiceTitleSection>
        <StaticImage src="../images/auction.png" alt="Hero-Image" width={35}/>
        <h1>{title}</h1>
        <Line></Line>
      </ServiceTitleSection>

      <HelpText> *{helptext} </HelpText>

      <ServicesContainer> 
        {services.map((point, index) => (
              <Services  key={index}>
                <CircularImageContainer>
                  <CircularImage src={servicesImages[index]} alt="Hero-Image" />
                </CircularImageContainer>
                <p>{point}</p>
              </Services>
          ))}
      </ServicesContainer>

    </ServiceSection>
  )
}

const ServiceSection = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 background-color: rgba(136, 134, 132, 0.3); 
`

const ServiceTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;

  @media screen and (max-width: 768px) {
    justify-content: space-evenly;
  }
`

const Line = styled.div`
  width: 300px;
  height: 2px;
  background-color: #A42C39;

  @media screen and (max-width: 768px) {
    width: 190px;
  }
`

const HelpText = styled.p`
  align-self: center;
  font-size: 16px;
  width: 95%;
  margin-top: 1%;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  margin-top: 20px;
`

const Services = styled.div`
 flex-grow: 1;
 width: 33%;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 100px;

 @media screen and (max-width: 768px) {
    font-size: 8px;
    margin-bottom: 40px;
  }
`

const CircularImageContainer = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px; /* Adjust as needed */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  } 
`;

const CircularImage = styled.img`
  width: 80px;

  @media screen and (max-width: 768px) {
    width: 40px;
  }
`

export default Service