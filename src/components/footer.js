import React from "react"
import styled from "styled-components";
import Resume from "../Resume.pdf";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  height: 80px;
  left: 10%;
  width: 80%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-style: solid;
  border-color: gray;
`;

const socialStyle = {
  fontSize: "40px",
  margin: "15px",
};

const buttonStyle = {
  fontSize: "25px",
  margin: "10px",
};

export default () => (
  <FooterWrapper>
    <a href="https://github.com/afzalch" style={socialStyle}>
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/afzal-chishti/" style={socialStyle}>
      <FaLinkedin />  
    </a>
    <a href={Resume} target="_blank" rel="nofollow noopener noreferrer">
      <button style={buttonStyle}>
        <FaFilePdf/>
        Resume
      </button>
    </a>
  </FooterWrapper>
)