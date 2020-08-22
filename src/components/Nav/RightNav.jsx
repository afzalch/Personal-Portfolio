import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  width: 40%;

  a {
    text-decoration: none;
    color: 	#429C00;
    filter: grayscale(65%);
  }

  a:hover {
    color: #D2FF00;
    letter-spacing: 4px;
  }

  @media (max-width: 1000px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 3.5rem;
    justify-content: flex-start;
    // padding: 0 0;
  }
`;

const activeStyles = {
  color: '#D2FF00',
  letterSpacing: '4px',
};

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <h1><Link to="/" activeStyle={activeStyles}>Home</Link></h1>
      <h1><Link to="/projects" activeStyle={activeStyles}>Projects</Link></h1>
      <h1><Link to="/about" activeStyle={activeStyles}>About</Link></h1>
    </Ul>
  )
}

export default RightNav
