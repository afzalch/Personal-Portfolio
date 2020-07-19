import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Project from "../components/project"

const SecondPage = () => (
  <div>
    <Navbar/>
    <div className="content">
      <Project title="Laser Defender" img="/images/laser-defender.jpg" tags={['game-dev','unity', 'C#']} link="https://github.com/afzalch/LaserDefender" />
      <Project title="DS-Algorithms" img="/images/ds.jpg"  tags={['documentation', 'data-structures', 'algorithms']} link="https://github.com/afzalch/DS-Algorithms"/>
      <Project title="Pang" img="/images/ds.jpg"  tags={['game-dev', 'openGL', 'C++']} link="https://github.com/afzalch/Pang"/>
      <Project title="Blog App" img="/images/ds.jpg"  tags={['web-dev', 'openGL', 'JavaScript', 'Node', 'Express', 'MongoDB']} link="https://github.com/afzalch/Blog-App"/>
      <Project title="Paint" img="/images/ds.jpg"  tags={['application', 'openGL', 'C++']} link="https://github.com/afzalch/Pang"/>
      <Project title="CS-Topics" img="/images/ds.jpg"  tags={['documentation', 'security', 'notes']} link="https://github.com/afzalch/CS-Topics"/>
      <Project title="Personal Portfolio" img="/images/ds.jpg"  tags={['web-dev', 'Gatsby', 'React']} link="https://github.com/afzalch/Personal-Portfolio"/>

    </div>
    <Footer/>
  </div>
)

export default SecondPage
