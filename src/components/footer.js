import React from "react"
import styled from "styled-components";
import Resume from "../Resume.pdf";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding-top: 10px;
  height: 60px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1e22;
`;

const SocialStyle = styled.a`
  font-size: 40px;
  margin: 15px;

  &:hover {
    font-size: 50px
  }
`;
// const socialStyle = {
//   fontSize: "40px",
//   margin: "15px",
// };

// const buttonStyle = {
//   fontSize: "25px",
//   margin: "10px 10px",
//   color: "black",
//   backgroundColor: "#7200c6",
//   border: "none",
//   opacity: 0.6,
//   boxShadow: "1px 2.5px #252525",
//   verticalAlign: "middle",
// };

const Document = styled.a`
  font-size: 35px;
  margin: 15px;

  &:hover {
    font-size: 40px;
  }
`;

// const resume = {
//   margin: "15px",
//   fontSize: "35px",

//   // :hover {
//   //   fontSize: "45px",
//   // }
// }

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