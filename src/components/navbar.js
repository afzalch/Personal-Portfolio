import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";


// const NavbarWrapper = styled.ul`
//   position: absolute;
//   top: 12px;
// `;
const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 80px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252525;
`;

const Navigation = styled.div`
  nav {
    a {
      margin: 0 20px;
      text-decoration: none;
      letter-spacing: 1.75px;
      text-transform: uppercase:
      font-size: 0.75rem;
      color: grey;
      &:last-child {
        margin-right: 2px;
      }
    }
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
  </NavbarWrapper>
)
    {/* <NavbarWrapper>
      <li><Link to="/" activeStyle={activeStyles}>Home</Link></li>
      <li><Link to="/contact" activeStyle={activeStyles}>Contact</Link></li>
      <li><Link to="/about" activeStyle={activeStyles}>About</Link></li>
    </NavbarWrapper> */}
    {/* <label className="switch">
      <input className="switch-input" type="checkbox" />
      <span className="switch-label" dataOn="On" dataOff="Off"></span> 
      <span className="switch-handle"></span> 
    </label> */}