import React from "react";
import styled from "styled-components/macro";

function Projects({ page }) {
  const PageWrapper = styled(page)`
    background-color: yellow;
  `;

  return (
    <PageWrapper id="projects">
      <h2>Projects</h2>
    </PageWrapper>
  );
}

export default Projects;
