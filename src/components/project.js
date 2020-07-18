// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import {FaGithub, FaReact, FaHtml5, FaPython, FaJava, FaTwitter, FaUnity} from "react-icons/fa";
import styled from "styled-components";
import React, {Component} from "react"

const CardWrapper = styled.div`
    position: relative;
    float: left;
    width: 35%;
    height: 40%;
    margin: 0 0;
    overflow: hidden;
    text-align: center;

    .overlay {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        position: absolute;
        background-color: grey;
    }

    &:hover .overlay {
        opacity: 0.5;
    }

    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }
`;

const ImgWrapper = styled.img`
    width: 600px;
    height: 300px;
`;

class Project extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <CardWrapper>
                <ImgWrapper src={this.props.img} />
                <h2><a href={this.props.link}>{this.props.title}</a></h2>
                <div className="overlay">
                    <div className="text">
                        <h2>{this.props.title}</h2>
                        {this.props.tags.map((tag, index) => (
                        <p key={index}> # {tag}</p> 
                        ))} 
                    </div>
                </div>
            </CardWrapper>
        );
    }
};

export default Project
