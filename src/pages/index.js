import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer";
import Carousel from "../components/carousel";

import '../styles/styles.scss';



const IndexPage = () => (
  <div>
    <Navbar/>  
      
      
      <div className="section first">
        <div className="text">
          <h2>What Am I Doing?</h2>
          <h4>
            I'm a DevOps engineer as of this moment working on IBM Guardium Insights, soon to become a final year computer science student in around a month. <br />
            Officially, my job is to bridge the gap between development code and production level code by ensuring that the development code works in a production environment. I also work with third-party products to incorporate into our product.
            <br />
            It's all about making the deadlines as stress-free as possible by finding issues in the code and bringing these issues up with the developers, so that the issues can be dealt with promptly.
            <br />
            If developers are to be considered as chefs, my role could be described as a head chef as I approve and polish the dishes(code) before they reach the customer. 
          </h4>
        </div>
        <div className="gallery">
          {/* <img src="/images/gatsby-icon.png" className="gallery-image"></img> */}
          <Carousel images={["/images/pang.jpg", "/images/gatsby-icon.png","/images/ds.jpg"]} description={["a", "b", "c"]}/>
        </div>
      </div>

      <div className="section-alt">

      </div>

      <div className="section last"></div>

    <Footer/>
  </div>
)

export default IndexPage
