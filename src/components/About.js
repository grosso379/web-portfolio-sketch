import React from "react";
import styled from "styled-components/macro";

function About({ page }) {
  const PageWrapper = styled(page)`
    background-color: red;
  `;

  return (
    <PageWrapper id="about">
      <h2 id="about">About</h2>
    </PageWrapper>
  );
}

export default About;
