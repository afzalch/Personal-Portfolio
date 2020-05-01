import React from "react"
import Navbar from "../components/navbar"
import Resume from "../Resume.pdf";

import 'font-awesome/css/font-awesome.min.css';

import '../styles/styles.scss';

const IndexPage = () => (
  <div>
    <Navbar/>
    <div className="content">
      <h1><a href="https://github.com/afzalch">Github</a></h1>
      <h1><a href="https://www.linkedin.com/in/afzal-chishti/">Linkedin</a></h1>
      {/* Create a button for resume on home page */}
      {/* <button>Resume</button> */}
      {/* <button><object src="../Resume.pdf" width="100%" height="100%">Resume</object></button> */}
      <a href={Resume} target="_blank" rel="nofollow noopener noreferrer">Resume</a>
    </div>
  </div>
)

export default IndexPage
