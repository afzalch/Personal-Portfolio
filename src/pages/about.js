import React from "react"
import Navbar from "../components/Nav/Navbar"
import Footer from "../components/footer"
import Carousel from "../components/carousel";

export default () => (
  <div>
    <Navbar/>
    <div className="section">
      <div className="text left">
        <h2>Who Am I?</h2>
        <h4>
          I am a student at McMaster University who will begin my final year of my computer science degree in September. Something that is important to me is to aid other people in their endeavors. Being able to have a positive impact on other people is something that drives me and computer science is one of the best fields because of the need for your skills and the numerous ways you can assist others whether that means an organization or a person. I chose to go into computer science fields so I could have an impact on the world however small that is and whether that means making an application or website that only a few people will use or lots of people will use.
        </h4>
      </div>
      <div className="gallery">
        <Carousel images={["../../plasp.jpeg", "../../volunteeringPeel.png"]} description={["PLASP - Childcare services which I volunteered with for over 100 hours over the course of 2 years", "Organization I worked with over course of 3 years to assist in events around the Peel Region"]}/>
      </div>
    </div>

    <div className="section-alt">
      <div className="gallery">
        <Carousel images={["../../degree.jpeg", "../../youtube.jpg"]} description={["Completing my undergrad degree in computer science", "Creating an educational YouTube channel"]}/>
      </div>
      <div className="text right">
        <h2>Goals</h2>
        <h4>
        My future goals at the moment would be to graduate in the immediate future, before working in the software industry. Another goal would be to create my own YouTube channel in which I create tutorials and tips for others in the industry and/or newcomers hoping to enter the industry. Another goal for me would be to teach or mentors others. I hope to either have the opportunity to create some courses online on sites such as Udemy and go on from there to having opportunity to mentor others in the field. In this industry, with our constant use of sites such as StackOverflow and getting advice from others such as co-workers, it seems only right to do the same to others and pay it forward. 
        </h4>
      </div>
    </div>

    <div className="section">
      <div className="text left">
        <h2>Interests</h2>
        <h4>
          I have numerous interests such as 
          <ul>
            <li>Devops - becoming familiar with technologies such as Ansible which is the future of devops</li>
            <li>Machine Learning - being such a hot topic in current day with it being implemented in numerous fields such </li>
            <li>Web Development - to learn about more frameworks other than React and get more experience with back-end</li>
            <li>Game Development - to create arcade or puzzle games before moving on to creating educational apps similar to games on sites such as <a href="https://www.funbrain.com/games" className="link">funbrain</a></li>
            <li>App Development - to create educational applications for both iOS and Android devices</li>
          </ul>
        </h4>
      </div>
      <div className="gallery">
        {/* <img src="/images/gatsby-icon.png" className="gallery-image"></img> */}
        <Carousel images={["../../ansible.png", "../../angular.png"]} description={["Ansible - tool that is game changer in Devops due to its' ability to automate tasks", "Angular - a very popular web framework that is still used quite commonly"]}/>
      </div>
    </div>
    <Footer/>
  </div>
)