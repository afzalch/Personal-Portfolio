import React from "react"

import Navbar from "../components/navbar"

import 'font-awesome/css/font-awesome.min.css';
import '../styles/styles.scss';

const IndexPage = () => (
  <div>
    <Navbar/>
    <div className="content">
      <p>Home</p>
    </div>
  </div>
)

export default IndexPage
