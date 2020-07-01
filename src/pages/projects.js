import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Project from "../components/project"

const SecondPage = () => (
  <div>
    <Navbar/>
    <div className="content">
      <Project title="Laser Defender" img="/images/laser-defender.jpg"/>
      <Project title="DS-Algorithms" img="/images/ds-algorithms.png"/>
    </div>
    <Footer/>
  </div>
)

export default SecondPage
