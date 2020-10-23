import React from "react";
import { icons } from "react-icons";
import styled from "styled-components/macro";
import {FaLinkedin, FaInstagram, FaFacebook, FaCopyright} from "react-icons/fa";

function validateEmail(inputText){
  // Checking for a valid email
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText.value.match(mailformat)){
    return true;
  }
  else{
    return false;
  }
}

function validateText(inputText){
  // Checking for letters and at least 3 characters
  let text = inputText.value;
  let regExp = /[a-zA-Z]/g;
  let n = text.length
  if (n > 3 && regExp.test(text)){
    console.log('a')
    return true;
  } else {
    return false;
  }
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

  /* Only use hover when the user is not in touchscreen */
  @media(hover: hover){
    button:hover {
      transition: 0.5s;
      color: #d91b6a;
      border-color: #d91b6a;
    }
  }
`

const IconContainer = styled.ul`
  padding-top:2.5vh;
  margin-top: 5vh;
  width: 100vw;
  background-color: #1B242F;
  display:flex;
  color: white;
  align-items: center;
  justify-content: space-evenly;

  a {
    color:white;
    text-decoration:none;
    /* margin: 0 10vw; */
    transition: transform 1s;
    margin: 2rem 0;
  }

  svg {
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    /* transition: transform 0.5s; */
    transition: color 1s;
  }

  @media(hover: hover){
    svg:hover {
      color: #d91b6a;
      /* transform: scale(1.50); */
    }

    a:hover {
      transform: rotateY(360deg)
    }
  } 
`

const Copyright = styled.div`
  background-color: #1B242F;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: white;
  padding-bottom: 1rem;
`

function Contact({ page }) {
  const PageWrapper = styled(page)`
    min-height: calc(100vh - 3.65rem);
    height: auto;
    background-color: #232732;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  // Function to handle submit button click
  // Checks if the form is valid and sends email in case it is 
  function handleClick() {
    let validName = validateText(document.getElementById('Name'));
    let validEmail = validateEmail(document.getElementById('Email'));
    let validMessage = validateText(document.getElementById('Message'));

    if (!validName){
      alert('You need to enter a valid name');
    } else if (!validEmail){
      alert('You need to enter a valid email');
    } else if (!validMessage){
      alert('You need to enter a valid message');
    } else {
      alert('all good')
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
      <IconContainer>
        <a href="https://www.facebook.com/juancruz.grosso.14/" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/juan_grosso/" target="_blank"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/juangrosso379/" target="_blank"><FaLinkedin /></a>
      </IconContainer>
      <Copyright>Juan Grosso&nbsp;<FaCopyright/>&nbsp;2020</Copyright>
    </PageWrapper>
  );
}

export default Contact;
