import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default () => (
  <div>
    <Navbar/>
    <div className="content">
      <h1>Future Goals</h1>
      <h3>My future goals at the moment would be to graduate in the immediate future, before working in the software industry. Another goal would be to create my own YouTube channel in which I create tutorials and tips for others in the industry. A goal for me would be to teach either at a conference or </h3>
      <h1>Interests</h1>
      <h2>Programming</h2>
      <ul>
        <li>Machine Learning</li>
        <li>Web Development</li>
        <li>Data Science</li>
        <li>Game Development</li>
      </ul>
      <h2>Non-Programming</h2>
      <ul>
        <li>Sports (mainly football/soccer & basketball)</li>
        <li>Juggling</li>
        <li>TV (huge fan of anime)</li>
      </ul>

      <h1>Work</h1>
      <h3>I am currently working as a devops engineer for IBM Security Guardium Insights. My role entails incorporating other technologies with the product. Recently, I was in charge of incorporating IBM Db2 warehouse with the product for the previous release. 
        
        In the the upcoming release, I'm in charge of utilizing cert manager which is a Kubernetes add-on that automates the management and issuance of TLS certificates to create all the TLS certificates for IBM Security Guardium Insights.</h3>
    </div>
    <Footer/>
  </div>
)