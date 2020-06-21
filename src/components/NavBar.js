import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const List = styled.ul`
  text-decoration: none;
  display: flex;
  background-color: grey;
`;

const ListItemStyle = {
  padding: "1rem 2rem",
  fontSize: "2rem",
  listStyle: "none",
};

function NavBar() {
  return (
    <List>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={ListItemStyle}
      >
        Home
      </Link>

      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={ListItemStyle}
      >
        About
      </Link>

      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={ListItemStyle}
      >
        Contact
      </Link>

      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={ListItemStyle}
      >
        Projects
      </Link>
    </List>
  );
}

export default NavBar;
