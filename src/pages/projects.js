import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Project from "../components/project"

const SecondPage = () => (
  <div>
    <Navbar/>
    <div className="content">
      <Project title="Konnichiwa" />
      <Project title="Sayonara" />
    </div>
    <Footer/>
  </div>
)

export default SecondPage
