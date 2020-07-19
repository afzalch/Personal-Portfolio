// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import {FaGithub, FaReact, FaHtml5, FaPython, FaJava, FaTwitter, FaUnity} from "react-icons/fa";
import styled from "styled-components";
import React, {Component} from "react"

const CardWrapper = styled.div`
    position: relative;
    float: left;
    width: 33%;
    height: 40%:
    margin: auto;
`;

const ImgWrapper = styled.div`
    width: auto;
    height: auto; 
    padding-left: 5%;
    padding-right: 5%;
    position: relative;

    .img {
        max-width: 100%;
        max-height: 100%;
        margin:0 auto;
    }

    .overlay {
        top: 0;
        bottom: 0.5%;
        left: 5%;
        right: 5%;
        opacity: 0;
        transition: .5s ease;
        position: absolute;
        background-color: grey;
    }

    :hover .overlay {
        opacity: 0.5;
    }

    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -80%);
        text-align: center;
    }
`;

const Tags = styled.p`
    display: inline;
    color: powderblue;
`;

const Title = styled.h2`
    padding: 15px;
    text-align: center
`;

class Project extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <CardWrapper>
                <ImgWrapper>              
                <img src={this.props.img} className="img"/>
                <div className="overlay">
                    <div className="text">
                        <h2>{this.props.title}</h2>
                        {this.props.tags.map((tag, index) => (
                        <Tags key={index}> #{tag}</Tags> 
                        ))} 
                    </div>
                </div>
                </ImgWrapper>
                <Title><a href={this.props.link}>{this.props.title}</a></Title>
            </CardWrapper>
        );
    }
};

export default Project
