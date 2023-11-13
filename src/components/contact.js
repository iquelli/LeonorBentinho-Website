import React, { useState } from "react";
import styled from "styled-components";
import * as contactData from "../data/contact-data";

const Contact = ({id, language }) => {
  const title = contactData.contactTitle[language];
  const phrase = contactData.contactPhrase[language];
  const firstLabel = contactData.FirstFormLabel[language];
  const thirdLabel = contactData.ThirdFormLabel[language];
  const phoneNumber = contactData.PhoneNumber[language];
  const buttonMessage = contactData.Send[language];
  const successMessage = contactData.SuccessMessageData[language];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
  
    try {
      // Simulating an asynchronous operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      // Set the formSubmitted state to true
      setFormSubmitted(true);

    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An error occurred during form submission. Please try again.');
    }
  };


  return (
    <ContactContainer id={id}>
      <ContactTitle>{title}</ContactTitle>
      <ContactPhrase>{phrase}</ContactPhrase>

      <ContactInformation>
        {formSubmitted ? (
        <SuccessMessage>{successMessage}</SuccessMessage>
        ) : (
          <ContactForm>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/0e009d9c2f79e659fc5a19dba03e1b66" method="POST">

              <input type="text" name="_honey" style={{display:"none"}}></input>
              <input type="hidden" name="_captcha" value="false" style={{display:"none"}}></input>

              <label htmlFor="name">{firstLabel}</label>
              <input type="text" name="name" id="name" />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />

              <label htmlFor="message">{thirdLabel}</label>
              <textarea name="message" id="message" rows="5" />

              <SubmitButton type="submit">{buttonMessage}</SubmitButton>
            </form>
          </ContactForm>
        )}

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

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
  font-size: 1.5em;
  margin-bottom: 10px;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ContactPhrase = styled.p`
  color: white;
  margin-bottom: 20px;
  font-size: 1em;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const ContactInformation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    align-items: center;
    align-content: center;
    align-self: center;
    text-align: center;
    flex-direction: column;
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  color: white;

  @media screen and (max-width: 768px) {
    max-width: 350px;
    align-items: center;
    align-content: center;
    align-self: center;
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
  font-size: 1em;
  margin-bottom: 5px;
  margin-top: 25px;
`;

const ContactInfoDetail = styled.p`
  color: white;
  font-size: 18px;
`;

const SuccessMessage = styled.p`
  color: black;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  padding: 15px; 
  background-color: white; 
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


export default Contact;