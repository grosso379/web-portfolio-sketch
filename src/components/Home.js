import React from "react";
import styled from "styled-components/macro";

function Home({ page }) {
  const PageWrapper = styled(page)`
    background-color: green;
  `;

  return (
    <PageWrapper id="home">
      <h2>
        <a href="#about">click</a>
      </h2>
    </PageWrapper>
  );
}

export default Home;
