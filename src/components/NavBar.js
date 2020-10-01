import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";
// import image from "../images/logo.png";

// --------------------------------------------------- Start Here -------------------------------------------
const NavBarItems = styled.nav`
  background-color: #1b242f;
  font-family: "Raleway", sans-serif;
  color: white;
  width: 100%;
  height: 3.5rem;
  border-bottom: 0.15rem solid #d91b6a;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  padding: 1rem 1rem;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const MenuIcon = styled.div`
  font-size: 2rem;
`;

const LinksList = styled.ul`
  background-color: #383d39;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: ${(props) => (props.activado ? "300px" : "0px")};
  overflow: ${(props) => (props.activado ? "visible" : "hidden")};
  transition: 0.5s ease-out;

  a {
    display: block;
    padding: 0.5rem 1.5rem;
    text-align: center;
  }

  a:first-child {
    padding-top: 1rem;
  }

  a:last-child {
    padding-bottom: 1rem;
  }
`;

function NavBar() {
  function handleClick() {
    setDisplay(!display);
  }
  function handleLinkClick() {
    setDisplay(false);
  }

  const [display, setDisplay] = useState(false);

  const sections = ["Home", "About", "Projects", "Contact"];

  const links = sections.map((name) => {
    return (
      <Link
        className="link"
        activeClass="active"
        to={name.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-56}
        duration={500}
        onClick={handleLinkClick}
      >
        {name}
      </Link>
    );
  });

  return (
    <NavBarItems>
      <Container>
        <Logo>
          React <i className="fab fa-react"></i>
        </Logo>
        <MenuIcon onClick={handleClick}>
          <i class="fas fa-bars"></i>
        </MenuIcon>
      </Container>
      <LinksList activado={display}>{links}</LinksList>
    </NavBarItems>
  );
}

export default NavBar;
