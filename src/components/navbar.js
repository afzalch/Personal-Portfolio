import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #222222;
`;

const Navigation = styled.nav`
  margin-right: auto;
  margin-left: auto;
  h1{
    display: inline;
    padding: 10px 20px;
  }
  a{
    text-align: center;
    text-decoration: none;
    letter-spacing: 1.75px;
    text-transform: uppercase:
    font-size: 2rem;
    color: grey;
    text-align: left;
  }
  a:hover {
    color: green;
    letter-spacing: 6px;
  }

  a:after, a:before {
    backface-visibility: hidden;
    border: 1px solid rgba(#fff, 0);
    bottom: 0px;
    content: " ";
    margin: 0 auto;
    position: relative;
    transition: all 280ms ease-in-out;
    width: 0;
  }

  a:hover:after, a:hover:before {
    backface-visibility: hidden;
    border-color: red;
    transition: width 10000ms ease-in-out;
    width: 70%;
  }
`;

const activeStyles = {
  color: 'red',
  letterSpacing: '6px',
};
export default () => (
  <NavbarWrapper>
    <div className="logo">
      {/* Add logo image here */}
    </div>
    <Navigation>
        <h1><Link to="/" activeStyle={activeStyles}>Home</Link></h1>
        <h1><Link to="/projects" activeStyle={activeStyles}>Projects</Link></h1>
        <h1><Link to="/about" activeStyle={activeStyles}>About</Link></h1>
    </Navigation>
  </NavbarWrapper>
)