import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 80px;
  left: 10%;
  width: 80%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled.div`
  nav {
    a {
      margin: 0 20px;
      text-decoration: none;
      letter-spacing: 1.75px;
      text-transform: uppercase:
      font-size: 3rem;
      color: grey;
      
    }
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked span {
    background-color: #2196F3;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  span:before{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  input:checked + span{
    background-color: #2196F3;
  }
  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const activeStyles = {
  color: 'red'
};

export default () => (
  <NavbarWrapper>
    <div className="logo">
      {/* Add logo image here */}
    </div>
    <Navigation>
      <nav>
        <Link to="/" activeStyle={activeStyles}>Home</Link>
        <Link to="/contact" activeStyle={activeStyles}>Contact</Link>
        <Link to="/about" activeStyle={activeStyles}>About</Link>
      </nav>
    </Navigation>
    <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Switch>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'light' : 'dark')}
              checked={theme === 'light'}
            />
            <span></span>
          </Switch>
        )}
      </ThemeToggler>
  </NavbarWrapper>
)