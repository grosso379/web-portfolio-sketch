import React from "react";
import styled from "styled-components/macro";

const Heading = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Underline = styled.div`
  background-color: white;
  margin-top: .4rem;
  width: 5.5rem;
  height: 0.2rem;
  display:flex;

`

const FormContainer = styled.form`
  display:flex;
  flex-direction: column;
  padding-top: 3rem;
  width: 85vw;
  caret-color: white;

  input {
    background-color: #1e242c;
    line-height: 1.75rem;
    font-size: 1rem;
    padding: 0px 0.5rem;
    border: none;
    margin: 2px;
    color: white;
  }

  textarea {
    background-color: #1e242c;
    line-height: 1.75rem;
    font-size: 1rem;
    padding: 0px 0.5rem;
    border: none;
    margin: 2px;
    color: white;
  }
`

function Contact({ page }) {
  const PageWrapper = styled(page)`
    background-color: #252934;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  return (
    <PageWrapper id="contact">
      <Heading>
        <h2>Contact</h2>
        <Underline></Underline>
      </Heading>
      <FormContainer>
        <input name="Name" type="Text" placeholder="Name"></input>
        <input name="Email" type="Text" placeholder="Enter your email"></input>
        <textarea name="Message" placeholder="Leave a message"></textarea>
      </FormContainer>
    </PageWrapper>
  );
}

export default Contact;
