import React from "react";
import styled from "styled-components/macro";

const ImageContainer = styled.div`
  overflow: hidden;
  background-image: url(${process.env.PUBLIC_URL + "myself.jpg"});
  background-size: cover;
  background-position: 40% 10%;

  @media (max-width: 800px) {
    display:none;
  }
`

const Description = styled.div`
  color: white;
  padding: 5% 10% ;
  display: flex;
  flex-direction: column;
  align-items: left;
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    padding: 1rem 0rem;
    @media (min-width: 800px){
      font-size: 7vmin;
    }
  }

  h4 {
    font-family: "Raleway", sans-serif;
    padding: 1rem 0rem;
    line-height: 1.5rem;
    font-size: 1rem;
    @media (min-width: 800px){
      font-size: 2.5vmin;
      line-height:5vmin;
    }
  }
`

const PageWrapper = styled.div`
    height: calc(100vh - 3.65rem);
    overflow: hidden;
    background-color: #1e242c;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(to bottom, rgba(0,0, 0, .3), rgba(0,0, 0, .3)), url(${process.env.PUBLIC_URL + "myself.jpg"});
      background-size: cover;
      background-position: 40% 10%;
      text-shadow: 1px 1px black;
    }
  `;

function About() {
  return (
    <PageWrapper id="about">
      <ImageContainer></ImageContainer>
      <Description>
        <h2>Juan Grosso</h2>
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
