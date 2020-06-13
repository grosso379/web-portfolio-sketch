import React from "react";
import styled from "styled-components/macro";

const PageTitle = styled.h2`
  font-size: 4rem;
`;

function Page({ style, className }) {
  // Adding style to the page on top of the base styling of all pages
  const Wrapper = styled(style)`
    background-color: ${className === "Contact" ? "red" : "blue"};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Wrapper>
      <PageTitle>{className}</PageTitle>
    </Wrapper>
  );
}

export default Page;
