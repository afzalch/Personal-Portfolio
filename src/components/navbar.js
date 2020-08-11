import React, {Component} from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Helmet } from "react-helmet"
import {GiHamburgerMenu} from "react-icons/gi";

const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 8vh;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  background-color: #1d1e22;
`;

const Logo = styled.div`
  float:left
  width: 33.33333%
`;

const Navigation = styled.nav`
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  h1{
    display: inline;
    padding: 10px 20px;
    text-align: center;
    position: relative;
  }
  a{
    text-align: center;
    text-decoration: none;
    letter-spacing: 1.75px;
    text-transform: uppercase:
    font-size: 2rem;
    color: 	#429C00;
    filter: grayscale(65%);
    text-align: left;
  }
  a:hover {
    color: #D2FF00;
    letter-spacing: 4px;
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

  @media screen and (max-width: 1150px) {
    h1 {display:none}
  }


`;

const activeStyles = {
  color: '#D2FF00',
  letterSpacing: '4px',
};

const Date = styled.p`
  position: absolute;
  top: 1.45vh;
  left: 1%;
`;

const Hamburger = styled.a`
  margin-right: 2%;
  font-size: 32px;

  @media screen and (min-width: 1150px) {
    display:none;
  }

  @media screen and (max-width: 1150px) {
    display: block;
    color: 	#D2FF00;
    filter: grayscale(55%);
  }
`;

class Navbar extends Component {
  state = {
    date: ""
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/afzalch/Personal-Portfolio")
    .then(res => res.json())
    .then((data) => {
      var d1 = data.updated_at.slice(0,10)+" "+data.updated_at.slice(11,-1)+" UTC"
      this.setState({date : d1} )
    })
    .catch(console.log)
  }
  render () {
    return (
    <NavbarWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <Logo>
        {/* Add logo image here */}
      </Logo>
        <Date>Last updated on: {this.state.date}</Date> 
      <Navigation>
          <h1><Link to="/" activeStyle={activeStyles}>Home</Link></h1>
          <h1><Link to="/projects" activeStyle={activeStyles}>Projects</Link></h1>
          <h1><Link to="/about" activeStyle={activeStyles}>About</Link></h1>
      </Navigation>
      <Hamburger href="ww.google.com" className="h">
        <div><GiHamburgerMenu/></div>
      </Hamburger>
    </NavbarWrapper>
    )
  }
}

export default Navbar