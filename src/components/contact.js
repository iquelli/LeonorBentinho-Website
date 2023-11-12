import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import * as contactData from "../data/contact-data"

const Contact = ({ language }) => {

  const title = contactData.contactTitle[language];
  const phrase = contactData.contactPhrase[language];
  
  return (

    <ContactContainer>

      <ContactTitle>{title}</ContactTitle>
      <ContactPhrase>{phrase}</ContactPhrase>

      <ContactInformation>
          <form method="post" data-netlifly="true" data-netlifly-honeypot="bot-field">
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Subject
              <input type="text" name="subject" id="subject" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
          
        <p> Helloo </p>
      </ContactInformation>

    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  background-color: #A42C39;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ContactTitle = styled.p`
  color: white;
  font-weight: 600;
  font-size: 2em;
  margin-left: 5%;
  
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`

const ContactPhrase = styled.p`
  color: white;
  margin-left: 5%;
`

const ContactInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export default Contact