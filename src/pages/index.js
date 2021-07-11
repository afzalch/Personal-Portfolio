import React from "react"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/footer";
import Carousel from "../components/carousel";

import '../styles/styles.scss';



const IndexPage = () => (
  <div>
    <Navbar/>  

    <div className="section">
      <div className="text left">
        <h2>What Am I Doing?</h2>
        <h4>
          I'm a DevOps engineer as of this moment working on <a href="https://www.ibm.com/ca-en/marketplace/guardium-insights" className="link">IBM Guardium Insights</a>, after completing my  computer science degree in May. <br />
          Officially, my job is to bridge the gap between development code and production level code by ensuring that the development code works in a production environment. I also work with third-party products to incorporate into our product.
          <br />
          It's all about making the deadlines as stress-free as possible by finding issues in the code and bringing these issues up with the developers, so that the issues can be dealt with promptly.
        </h4>
      </div>
      <div className="gallery">
        <Carousel images={["../../ibm.png","../../mcmaster.jpeg"]} description={["Currently working in the Markham software lab of IBM", "The university I completed my bachelors from"]}/>
      </div>
    </div>

      <div className="section-alt">
        <div className="gallery">
          <Carousel images={["../../docker.jpeg", "../../jenkins.png"]} description={["Container - lightweight and standalone executable package of software", "Jenkins - automation server that can be used reliably build and test software"]}/>
        </div>
        <div className="text right">
          <h2>Projects</h2>
          <h4>
          As of this moment, I'm working on a workout tracker application alongside another individuals such as <a href="https://www.linkedin.com/in/syed-razi/" className="link">Razi Syed</a> and <a href="https://www.linkedin.com/in/omer3siddiqui14/" className="link">Omer Siddiqui</a>. As all of us do workout, we thought this would be a good project in getting more experience with React and creating full stack applications. The application can be found <a href="https://github.com/Nasireen/workout-tracker" className="link">here</a>. 
          </h4>
        </div>
      </div>

      <div className="section">
        <div className="text left">
          <h2>Learning</h2>
          <h4>
            Learning and constantly growing is something that is fundamental to the job as someone in the CS field. As of this moment, I am taking some courses to learn Ansible in more detail. I am also reviewing my knowledge of data structures and algorithms with the resources linked below. 
            <br />
            <a href="https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" className="link">MIT OpenCourseWare</a><br />
            <a href="https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLClglAy38DbzMCP7mjyaKxsktp7ZOwFuG&index=14&t=2392s" className="link">Graph Theory</a><br />
            <a href="https://leetcode.com/" className="link">Leetcode</a>
          </h4>
        </div>
        <div className="gallery">
          {/* <img src="/images/gatsby-icon.png" className="gallery-image"></img> */}
          <Carousel images={["../../mit.jpg", "../../leetcode.png"]} description={["MIT OpenCourseWare - Great resource for lot of online content in numerous different topics (CS, Math, Physisc, Humanities, etc)", "Leetcode - website similar to hackerrank that has tons of technical questions that are commonly asked in interviews"]}/>
        </div>
      </div>

    <Footer/>
  </div>
)

export default IndexPage
