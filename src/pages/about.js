import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default () => (
  <div>
    <Navbar/>
    <div className="content">
      <h1>Current Project</h1>
      <h3>My future goals at the moment would be to graduate in the immediate future, before working in the software industry for 10+ years. Another side project for me in this mean time would be to create my own Youtube channel which I can create tutorials and tips for others in the industry. During this time, I want to be able to do a Masters and then eventually complete a PHD so that I may become a professor in the latter part of my career. Teaching in my opinion is the most rewarding profession since you can see first-hand the profound impact that you can leave on someone and see how people grow.</h3>
      <h1>Interests</h1>
      <h3>I have countless programming interests such as</h3>
      <ul>
        <li>Machine Learning</li>
        <li>Web Development</li>
        <li>Data Science</li>
        <li>Game Development</li>
      </ul>
      <h3>Some other non-programming related interests are sports whether it's playing or watching sports. I am learning to juggle and Japanese these days. In addition, I have a YouTube channel about anime which is something I have been watching since I was 6 years old and resulted in me falling in love with the Japanese language and culture. </h3>
    </div>
    <Footer/>
  </div>
)