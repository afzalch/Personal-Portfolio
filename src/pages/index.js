import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer";

import '../styles/styles.scss';

const IndexPage = () => (
  <div>
    <Navbar/>  
    <div className="content">
      <div className="section">
        <h2>What Am I Doing?</h2>

      </div>
    </div>
    <Footer/>
  </div>
)

export default IndexPage
