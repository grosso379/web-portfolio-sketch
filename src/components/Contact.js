import React from "react";
import styled from "styled-components/macro";

function Contact({ page }) {
  const PageWrapper = styled(page)`
    background-color: blue;
  `;

  return (
    <PageWrapper id="contact">
      <h2>Contact</h2>
    </PageWrapper>
  );
}

export default Contact;
