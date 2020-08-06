import React, { Component } from "react"
import styled from "styled-components";
import Resume from "../Resume.pdf";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 8vh;
  width: 100%;
  z-index: 10;
  background-color: #1d1e22;
`;

const Icons = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;

`;

const SocialStyle = styled.a`
  font-size: 40px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 1.75vh;
  color: #5a009c;
  filter: grayscale(70%);
  bottom: 0;
  transition: font-size 0.15s;

  &:hover {
    filter: grayscale(0%);
    font-size: 50px;
  }
`;


const Document = styled.a`
  font-size: 34px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 1.3vh;
  color: #5a009c;
  filter: grayscale(70%);
  transition: font-size 0.15s;

  &:hover {
    font-size: 45px;
    filter: grayscale(0%);
  }
`;

const Date = styled.p`
  display: inline;
  float: left;
`;

class Footer extends Component {
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
  
  render() {
    return (
      <div>
        <FooterWrapper>
          <Icons>
          <Date>Last updated on: {this.state.date}</Date> 
            <SocialStyle href="https://github.com/afzalch" >
              <FaGithub />
            </SocialStyle>
            <SocialStyle href="https://www.linkedin.com/in/afzal-chishti/">
              <FaLinkedin />  
            </SocialStyle>
            <Document> 
              <FaFilePdf/>
            </Document>
          </Icons>
        </FooterWrapper>
    </div>
    )
  }
}

export default Footer 
