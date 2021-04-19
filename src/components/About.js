import React from "react";
import styled from "styled-components/macro";

const ImageContainer = styled.div`
  overflow: hidden;
  background-color: red;
`

const Description = styled.div`
  color: white;
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    padding: 2rem 0rem;
  }

  h4 {
    font-family: "Raleway", sans-serif;
    line-height: 1.5rem;
    font-size: 1rem;
  }
  padding: 10% 10%;
`


function About({ page }) {
  const PageWrapper = styled(page)`
    overflow: hidden;
    background-color: #1e242c;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  `;

  return (
    <PageWrapper id="about">
      <ImageContainer>
        <img src={process.env.PUBLIC_URL + "myself.jpg"}></img>
      </ImageContainer>
      <Description>
        <h2>Juan Cruz Grosso</h2>
        <h4>I am an international student passionate about programming and solving problems in creative ways. At Northwest Missouri State University where I am completing my sophomore 
          year in Computer Science, I have learned the basic knowledge to develop RESTful applications. Moreover, working on personal projects helped me put these concepts into practice.
           This allowed me to land a position at the Learning and Teaching Center as a software developer where I am currently working with a team of developers to maintain, update, and 
           create applications for NWMSU. 
        </h4>
      </Description>
    </PageWrapper>
  );
}

export default About;
