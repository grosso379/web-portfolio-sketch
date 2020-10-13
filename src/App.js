import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

// Sets up global styling
const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family: "Lato", Helvetica, Arial, sans-serif;
  }
`;

// Contains all the content on the page
const FullPage = styled.div`
  min-height: 100vh;
`;

// Base style for all pages
const StyledPage = styled.section`
  height: 100vh;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <FullPage>
        <NavBar />
        <Home page={StyledPage} />
        <About page={StyledPage} />
        <Projects page={StyledPage} />
        <Contact page={StyledPage} />
      </FullPage>
    </React.Fragment>
  );
}

export default App;
