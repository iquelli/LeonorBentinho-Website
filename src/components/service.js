/**
 * Services section of the website
 *
 * Mobile and Desktop visualization is implemented.
 */

import React, { useState } from "react"; 
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import * as serviceData from "../data/service-data"

const Service = ({ language }) => {

  const title = serviceData.serviceTitleData[language];
  const helptext = serviceData.serviceHelpData[language];

  return (

    <ServiceSection>
      <ServiceTitleSection>
        <StaticImage src="../images/auction.png" alt="Hero-Image" width={35}/>
        <h1>{title}</h1>
        <Line></Line>
      </ServiceTitleSection>

      <HelpText> {helptext} </HelpText>

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
  justify-content: space-between;
  height: 100px;
  margin-bottom: 50px; 
`

const Line = styled.div`
  width: 300px;
  height: 2px;
  background-color: #A42C39;
`

const HelpText = styled.p`
  align-self: center;
`

export default Service