import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer";
import Carousel from "../components/carousel";

import '../styles/styles.scss';



const IndexPage = () => (
  <div>
    <Navbar/>  
      
      
    <div className="section first">
      <div className="text left">
        <h2>What Am I Doing?</h2>
        <h4>
          I'm a DevOps engineer as of this moment working on <a href="https://www.ibm.com/ca-en/marketplace/guardium-insights" className="link">IBM Guardium Insights</a>, soon to become a final year computer science student in around a month. <br />
          Officially, my job is to bridge the gap between development code and production level code by ensuring that the development code works in a production environment. I also work with third-party products to incorporate into our product.
          <br />
          It's all about making the deadlines as stress-free as possible by finding issues in the code and bringing these issues up with the developers, so that the issues can be dealt with promptly.
          <br />
          If developers are to be considered as chefs, my role could be described as a head chef as I approve and polish the dishes(code) before they reach the customer. 
        </h4>
      </div>
      <div className="gallery">
        <Carousel images={["/images/ibm.png","/images/mcmaster.jpeg"]} description={["Currently working in the Markham software lab of IBM", "My university that I will be attending for my final year of computer science starting in September"]}/>
      </div>
    </div>

      <div className="section-alt">
        <div className="gallery">
          <Carousel images={["/images/docker.jpeg", "/images/jenkins.png"]} description={["Container - lightweight and standalone executable package of software", "Jenkins - automation server that can be used reliably build and test software"]}/>
        </div>
        <div className="text right">
          <h2>Projects</h2>
          <h4>
          As of this moment, I'm not working on any projects. I am brainstorming project ideas that I can do alongside another individuals such as <a href="https://www.linkedin.com/in/syed-razi/" className="link">Razi Syed</a>. If possible, I would like to do a project in which I can have an opportunity to familiarize myself with Docker and Jenkins. Though I use those two on regular basis for work, I wish to get a feel for how to setup Jenkins pipeline for a new project and how to use Docker images to containerize parts of a product.
          </h4>
        </div>
      </div>

      <div className="section last">
        <div className="text left">
          <h2>Learning</h2>
          <h4>
            Learning and constantly growing is something that is fundamental to the job as someone in the CS field. As of this moment, I do not have any courses planned to take over the next month as I soon begin my final year of my undergraduate degree in September. I am reviewing both my data structure and algorithms knowledge by doing Leetcode problems as well as watching Youtube videos on said topics. 
            <br />
            <a href="https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" className="link">MIT OpenCourseWare</a><br />
            <a href="https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLClglAy38DbzMCP7mjyaKxsktp7ZOwFuG&index=14&t=2392s" className="link">Graph Theory</a><br />
            <a href="https://leetcode.com/" className="link">Leetcode</a>
          </h4>
        </div>
        <div className="gallery">
          {/* <img src="/images/gatsby-icon.png" className="gallery-image"></img> */}
          <Carousel images={["/images/mit.jpg", "/images/leetcode.png"]} description={["MIT OpenCourseWare - Great resource for lot of online content in numerous different topics (CS, Math, Physisc, Humanities, etc)", "Leetcode - website similar to hackerrank that has tons of technical questions that are commonly asked in interviews"]}/>
        </div>
      </div>

    <Footer/>
  </div>
)

export default IndexPage
