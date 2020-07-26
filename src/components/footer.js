import React from "react"
import styled from "styled-components";
import Resume from "../Resume.pdf";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";

const FooterWrapper = styled.div`
  position: absolute;
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
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 1.75vh;
  // opacity: 0.45;
  color: #5a009c;
  filter: grayscale(80%);
  bottom: 0;

  // &:hover {
  //   filter: grayscale(0);
  //   font-size: 50px;
  //   opacity: 1;
  // }
`;


const Document = styled.a`
  font-size: 34px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 1.3vh;
  color: #5a009c;
  opacity: 0.45;

  // &:hover {
  //   font-size: 45px;
  //   opacity: 1;
  // }
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