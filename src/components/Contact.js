import React from "react";
import styled from "styled-components/macro";

function validateEmail(inputText){
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat)){
    return true;
  }
  else{
    return false;
  }
}

function validateName(){

}

const Heading = styled.div`
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2.5vh;
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
  padding-top: 2.5vh;
  width: 75vw;
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
    height: 30vh;
    line-height: 1.75rem;
    font-size: 1rem;
    padding: 0px 0.5rem;
    border: none;
    margin: 2px;
    color: white;
  }

  button {
    background-color: #1e242c;
    font-weight: 700;
    margin-top: 0.5rem;
    height: 3rem;
    color: white;
    border: 2px solid white;
    width: 7rem;
    align-self: flex-end;
    font-size:1.35rem;
    cursor: pointer;
  }

  button:hover {
    transition: 0.5s;
    color: #d91b6a;
    border-color: #d91b6a;
  }
`

const IconContainer = styled.div`
  flex-grow: 2;
  padding-top:2.5vh;
  margin-top: 5vh;
  width: 100vw;
  background-color: #1B242F;
  display:flex;
`

function Contact({ page }) {
  const PageWrapper = styled(page)`
    height: 100vh !important;
    background-color: #232732;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  function handleClick() {
    let validEmail = validateEmail(document.getElementById('Email'))

    if (!validEmail){
      alert('You need to enter a valid email')
    }
  }

  return (
    <PageWrapper id="contact">
      <Heading>
        <h2>Contact</h2>
        <Underline></Underline>
      </Heading>
      <FormContainer>
        <input id='Name' name="Name" type="Text" placeholder="Name" />
        <input id='Email' name="Email" type="Text" placeholder="Enter your email" />
        <textarea id='Message'name="Message" placeholder="Leave a message please" rows="20" cols="4"></textarea>
        <button type='button' onClick={handleClick}>Submit</button>
      </FormContainer>
      <IconContainer></IconContainer>
    </PageWrapper>
  );
}

export default Contact;
