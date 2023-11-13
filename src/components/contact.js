import React from "react";
import styled from "styled-components";
import * as contactData from "../data/contact-data";

const Contact = ({ language }) => {
  const title = contactData.contactTitle[language];
  const phrase = contactData.contactPhrase[language];
  const firstLabel = contactData.FirstFormLabel[language];
  const thirdLabel = contactData.ThirdFormLabel[language];
  const phoneNumber = contactData.PhoneNumber[language];

  return (
    <ContactContainer>
      <ContactTitle>{title}</ContactTitle>
      <ContactPhrase>{phrase}</ContactPhrase>

      <ContactInformation>
        <ContactForm>
          <form action="https://formsubmit.co/0e009d9c2f79e659fc5a19dba03e1b66" method="POST">

            <input type="text" name="_honey" style={{display:"none"}}></input>
            <input type="hidden" name="_captcha" value="false" style={{display:"none"}}></input>

            <label htmlFor="name">{firstLabel}</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="message">{thirdLabel}</label>
            <textarea name="message" id="message" rows="5" />

            <SubmitButton type="submit">Send</SubmitButton>
          </form>
        </ContactForm>

        <Contacts>
          <ContactInfo>
            <ContactInfoTitle>Email</ContactInfoTitle>
            <ContactInfoDetail as="a" href="mailto:advogada@leonorbentinho.com">
              advogada@leonorbentinho.com
            </ContactInfoDetail>
          </ContactInfo>

          <ContactInfo>
            <ContactInfoTitle>{phoneNumber}</ContactInfoTitle>
            <ContactInfoDetail as="a" href="tel:+351916021599">
              +351 916 021 599
            </ContactInfoDetail>
          </ContactInfo>
        </Contacts>
      </ContactInformation>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: #a42c39;
  opacity: 90%;
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.p`
  color: white;
  font-weight: 600;
  font-size: 2em;
  margin-bottom: 10px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ContactPhrase = styled.p`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    align-self: center;
  }
`;

const ContactInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  color: white;

  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
`;

const SubmitButton = styled.button`
  background-color: #a42c39;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactInfo = styled.div`
  text-align: left;
`;

const ContactInfoTitle = styled.p`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 25px;
`;

const ContactInfoDetail = styled.p`
  color: white;
  font-size: 18px;
`;

export default Contact;