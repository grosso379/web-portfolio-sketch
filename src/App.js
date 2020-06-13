import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import Page from "./components/Page";

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
  border: 1px solid black;
  background-color: green;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <FullPage>
        <Page className="Home" style={StyledPage} />
        <Page className="About" style={StyledPage} />
        <Page className="Portfolio" style={StyledPage} />
        <Page className="Contact" style={StyledPage} />
      </FullPage>
    </React.Fragment>
  );
}

export default App;
