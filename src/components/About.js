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
  padding: 5% 7%;
  display: flex;
  flex-direction: column;
  align-items: left;
  h2 {
    width: fit-content;
    a {
      font-size: 2rem;
    }
  }

  h4 {
    font-family: "Raleway", sans-serif;
    line-height: 1.2rem;
    font-size: 0.6rem;
    padding-top: 0.5rem;
    @media (min-width: 800px){
      font-size: 1.9vmin;
      line-height:3.5vmin;
    }

    section {
      padding-bottom: 0.5rem;
      @media (min-width: 800px){
        padding-bottom: 0.5rem;
      }
    }
  }
`

const PageWrapper = styled.div`
    height: calc(100vh - 3.65rem);
    overflow: hidden;
    background-color: #1e242c;
    display: grid;
    grid-template-columns: 1fr 2fr;
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
        <h4>
          <section>
          As a highly skilled software engineer, I have a proven track record of developing innovative software solutions that improve efficiency, productivity, and user experience. 
          With a Bachelor's degree in Computer Science and experience working with diverse teams, I possess the technical knowledge, communication skills, and leadership abilities necessary to drive projects from ideation to implementation.
          </section>
          <section>
          In my current role at Northwest Missouri State University, I have leveraged my expertise in text processing, UI design, and team management to develop and enhance critical applications, 
          such as a student census application and an event tracking system. These projects have allowed me to streamline operations, automate processes, and improve user experience, resulting in significant time and cost savings.
          </section>
          <section>
          As a former software engineer intern at LinkedIn, I gained hands-on experience working in a fast-paced, collaborative environment, where I refactored outdated code, designed comprehensive unit tests, 
          and launched new features that improved the user experience for thousands of weekly learners.
          </section>
          <section>
          In addition to my technical skills, I have demonstrated leadership capabilities as an intern pod champion at LinkedIn and a volleyball team captain at Universidad Tecnológica Nacional. 
          In these roles, I effectively managed teams of diverse backgrounds, organized meetings, and fostered a safe and inclusive environment.
          </section>
          <section>
          I am proficient in Java (Spring Boot), Python (Flask, Pandas, Scikit-Learn, Keras), JavaScript (NodeJS, VueJS, ReactJS), Firebase, SQL, HTML/CSS, Git, GitHub, and Unix Scripting. 
          I am excited about the opportunity to apply my skills and experience to new challenges and contribute to the success of innovative projects.
          </section>
        </h4>
      </Description>
    </PageWrapper>
  );
}

export default About;
