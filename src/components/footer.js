import React from "react"
import styled from "styled-components";
import Resume from "../Resume.pdf";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";

const FooterWrapper = styled.div`
  bottom: 0;
  height: 8vh;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center; 
  justify-content: center;
  background-color: #1d1e22;
`;

const SocialStyle = styled.a`
  font-size: 40px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 1.75vh;
  color: #5a009c;
  filter: grayscale(35%);
  bottom: 0;
  transition: font-size 0.15s;
  &:hover {
    filter: grayscale(0%);
    font-size: 50px;
  }
`;


const Document = styled.a`
  font-size: 34px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 1.3vh;
  color: #5a009c;
  filter: grayscale(35%);
  transition: font-size 0.15s;
  &:hover {
    font-size: 45px;
    filter: grayscale(0%);
  }
`;

export default () => (
  <FooterWrapper>
    <SocialStyle href="https://github.com/afzalch" >
      <FaGithub />
    </SocialStyle>
    <SocialStyle href="https://www.linkedin.com/in/afzal-chishti/">
      <FaLinkedin />  
    </SocialStyle>
    <Document> 
      <FaFilePdf/>
    </Document>
  </FooterWrapper>
)