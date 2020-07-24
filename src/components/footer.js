import React from "react"
import styled from "styled-components";
import Resume from "../Resume.pdf";
import {FaGithub, FaLinkedin, FaFilePdf} from "react-icons/fa";

const FooterWrapper = styled.div`
  position: relative;
  bottom: 0;
  padding-top: 10px;
  height: 60px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444444;
`;

const socialStyle = {
  fontSize: "40px",
  margin: "15px",
};

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

const resume = {
  margin: "15px",
  fontSize: "35px",
}

export default () => (
  <FooterWrapper>
    <a href="https://github.com/afzalch" style={socialStyle}>
      <FaGithub />
    </a>
    <a href="https://www.linkedin.com/in/afzal-chishti/" style={socialStyle}>
      <FaLinkedin />  
    </a>
    <a href={Resume} target="_blank" rel="nofollow noopener noreferrer" style={resume}> 
      {/* <button style={buttonStyle}>
        <FaFilePdf/>
        Resume
      </button> */}
      <FaFilePdf/>
    </a>
  </FooterWrapper>
)