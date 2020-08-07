import React, {Component} from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


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

const Date = styled.p`
  position: absolute;
  top: 1.5vh
`;

class Navbar extends Component {
  state = {
    date: ""
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/afzalch/Personal-Portfolio")
    .then(res => res.json())
    .then((data) => {
      var d1 = data.updated_at.slice(0,10)+" "+data.updated_at.slice(11,-1)
      this.setState({date : d1} )
    })
    .catch(console.log)
  }
  render () {
    return (
    <NavbarWrapper>
      <Logo>
        {/* Add logo image here */}
      </Logo>
      <div>
        <Date>Last updated on: {this.state.date}</Date> 
      </div>
      <Navigation>
          <h1><Link to="/" activeStyle={activeStyles}>Home</Link></h1>
          <h1><Link to="/projects" activeStyle={activeStyles}>Projects</Link></h1>
          <h1><Link to="/about" activeStyle={activeStyles}>About</Link></h1>
      </Navigation>
      
    </NavbarWrapper>
    )
  }
}

export default Navbar