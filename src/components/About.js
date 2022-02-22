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

const ResumeContainer = styled.a`
  padding: 1rem 0rem;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: white;
  text-decoration: none;
  @media (min-width: 800px){
    font-size: 7vmin;
    :hover{
      text-decoration: none;
      color: #d91b6a;
      cursor:pointer;
    }
  }
`;

const Description = styled.div`
  color: white;
  padding: 5% 10% ;
  display: flex;
  flex-direction: column;
  align-items: left;
  h2 {
    width: fit-content;
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
        <h2><ResumeContainer title="My Resume" href={process.env.PUBLIC_URL + "Resume.pdf"} target="_blank">Juan Grosso</ResumeContainer></h2>
        <h4>I am an international student passionate about programming and solving problems in creative ways. At Northwest Missouri State University where I am completing my junior 
          year in Computer Science, I have learned to develop RESTful applications. 
          <br></br>
          Moreover, working on personal projects helped me put these concepts into practice allowing me to showcase 
          my skills. This allowed me to land a position at the Learning and Teaching Center as a software developer where I am currently working with a team of developers to design, develop, 
          update, and maintain applications for NWMSU. 
          <br></br>
          This summer 2022 I will be joining Linkedin as a remote software engineer intern working for their San Francisco office.
        </h4>
      </Description>
    </PageWrapper>
  );
}

export default About;
