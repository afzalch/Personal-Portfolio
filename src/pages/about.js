import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Carousel from "../components/carousel";

export default () => (
  <div>
    <Navbar/>
    <div className="section first">
      <div className="text left">
        <h2>Who Am I?</h2>
        <h4>

        </h4>
      </div>
      <div className="gallery">
        {/* <img src="/images/gatsby-icon.png" className="gallery-image"></img> */}
        <Carousel images={["/images/pang.jpg", "/images/gatsby-icon.png","/images/ds.jpg"]} description={["a", "b", "c"]}/>
      </div>
    </div>

    <div className="section-alt">
      <div className="text right">

      </div>
      <div className="gallery"> 

      </div>
    </div>

    <div className="section last">
      <div className="text left">
        <h2>Interests</h2>
        <h4>
          I have numerous interests such as 
          <ul>
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Game Development</li>
            <li>App Development</li>
          </ul>
        </h4>
      </div>
      <div className="gallery">
        {/* <img src="/images/gatsby-icon.png" className="gallery-image"></img> */}
        <Carousel images={["/images/pang.jpg", "/images/gatsby-icon.png","/images/ds.jpg"]} description={["a", "b", "c"]}/>
      </div>
    </div>



    <div className="content">
      <h1>Future Goals</h1>
      <h3>My future goals at the moment would be to graduate in the immediate future, before working in the software industry. Another goal would be to create my own YouTube channel in which I create tutorials and tips for others in the industry. A goal for me would be to teach either at a conference or </h3>
      <h1>Interests</h1>
      <h2>Programming</h2>
      <ul>
        <li></li>
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

      </div>
    <Footer/>
  </div>
)