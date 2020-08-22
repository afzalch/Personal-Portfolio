import React from "react"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/footer"
import Project from "../components/project"

const SecondPage = () => (
  <div>
    <Navbar/>
    <div className="content">
      <Project title="Laser Defender" img="/images/laser-defender.jpg" tags={['game-dev','unity', 'C#']} link="https://github.com/afzalch/LaserDefender" description="A survival/horde mode game in which player must survive numerous waves of enemies of increasing difficulty. " />
      <Project title="Pang" img="/images/pang.jpg"  tags={['game-dev', 'openGL', 'C++']} link="https://github.com/afzalch/Pang" /> 
      <Project title="Blog App" img="/images/ds.jpg"  tags={['web-dev', 'openGL', 'javaScript', 'node', 'express', 'mongoDB']} link="https://github.com/afzalch/Blog-App" description="A web application that allows users to create blog posts that are stored on a database. " />
      <Project title="Chicago Food Inspector " img="/images/ds.jpg"  tags={['app-dev', 'java']} link="https://github.com/afzalch/Chicago_Food_Inspector" description="An application that used a database to rank restaurants in Chicago based on the number and severity of food/health violations "/>  
      <Project title="Personal Portfolio" img="/images/personal-site.png"  tags={['web-dev', 'gatsby', 'react']} link="https://github.com/afzalch/Personal-Portfolio" description="This website which is to describe my work experience, projects, and myself. "/> 
    </div>
    <Footer/>
  </div>
)

export default SecondPage
