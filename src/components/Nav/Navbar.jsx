import React, {Component}  from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: #1d1e22;
  align-items: center;

  .logo {
    position: absolute;
    padding: 2vw 0;
  }
`

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
      <Nav>
        <div className="logo">
          Updated: {this.state.date}
        </div>
        <Burger />
      </Nav>
    )
  }
}

export default Navbar
