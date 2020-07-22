import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer";

import '../styles/styles.scss';

const IndexPage = () => (
  <div>
    <Navbar/>
    <div className="content">
    <h1>Work</h1>
      <h3>I am currently working as a devops engineer for IBM Security Guardium Insights. My role entails incorporating other technologies with the product. Recently, I was in charge of incorporating IBM Db2 warehouse with the product for the previous release. 
        
        In the the upcoming release, I'm in charge of utilizing cert manager which is a Kubernetes add-on that automates the management and issuance of TLS certificates to create all the TLS certificates for IBM Security Guardium Insights.</h3>
    </div>
    <Footer/>
  </div>
)

export default IndexPage
