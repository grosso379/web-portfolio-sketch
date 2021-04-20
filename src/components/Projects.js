import React from "react";
import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  {width: 1, itemsToShow: 1},
]

const Item = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  /* background-size: 90%; */
  transition: 0.5s;

  @media(hover: hover){
    :hover{
      cursor: pointer;
      transform: scale(0.97);
    }
  }
`

const PageWrapper = styled.div`
  height: calc(100vh - 3.65rem);
  min-height: calc(100vh - 3.65rem);
  background-color: #1e242c;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    height: 70vh;
    width: 100%;
  }

  button {
    color: white;
  }

  .rec-pagination{
    button {
      background-color: white;
    }
  }

  #sort{
    background-image:url(${process.env.PUBLIC_URL + "sort.PNG"});
  }
  #weather{
    background-image:url(${process.env.PUBLIC_URL + "weather.PNG"});
  }
  #game{
    background-image:url(${process.env.PUBLIC_URL + "game.PNG"});
  }
  #calculator{
    background-image:url(${process.env.PUBLIC_URL + "calculator.PNG"});
  }

  @media (max-width: 800px) {
  #sort{
    background-image:url(${process.env.PUBLIC_URL + "sortMobile.PNG"});
  }
  #weather{
    background-image:url(${process.env.PUBLIC_URL + "weatherMobile.PNG"});
  }
  #game{
    background-image:url(${process.env.PUBLIC_URL + "gameMobile.PNG"});
  }
  #calculator{
    background-image:url(${process.env.PUBLIC_URL + "calculatorMobile.PNG"});
  }
  }
`;

function Projects() {
  return (
    <PageWrapper id="projects">
      <Carousel breakPoints={breakPoints}>
        <a href="https://cocky-jones-b3729d.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="sort"></Item>
        </a>
        <a href="https://inspiring-borg-067cdc.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="weather"></Item>
        </a>
        <a href="https://keen-morse-40cda0.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="game"></Item>
        </a>
        <a href="https://happy-bhabha-9c024b.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Item id="calculator"></Item>
        </a>
      </Carousel>
    </PageWrapper>
  );
}

export default Projects;
