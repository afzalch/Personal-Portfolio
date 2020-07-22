import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 45px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-style: solid;
  border-color: gray;
  background-color: darkslategray;
`;

const Navigation = styled.div`
  width: 80%;
  nav {
    a {
      margin: 0 20px;
      text-decoration: none;
      letter-spacing: 1.75px;
      text-transform: uppercase:
      font-size: 3rem;
      color: grey;
    }
    a:hover {
      color: #0FDAC1;
    }
  }
`;

const activeStyles = {
  color: 'red'
};

const h1style = {
  display: "inline"
};

export default () => (
  <NavbarWrapper>
    <div className="logo">
      {/* Add logo image here */}
    </div>
    <Navigation>
      <nav>
        <h1 style={h1style}><Link to="/" activeStyle={activeStyles}>Home</Link></h1>
        <h1 style={h1style}><Link to="/projects" activeStyle={activeStyles}>Projects</Link></h1>
        <h1 style={h1style}><Link to="/about" activeStyle={activeStyles}>About</Link></h1>
      </nav>
    </Navigation>
  </NavbarWrapper>
)