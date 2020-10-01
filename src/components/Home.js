import React from "react";
import styled from "styled-components/macro";

function Home({ page }) {
  const PageWrapper = styled(page)`
    background-color: green;
    margin-top: 3.5rem;
  `;

  return (
    <PageWrapper id="home">
      <h2>home</h2>
    </PageWrapper>
  );
}

export default Home;
