// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import {FaGithub, FaReact, FaHtml5, FaPython, FaJava, Fa} from "react-icons/fa";
// import {DiJavaScript} from "react-icons/"
// import { IconContext } from "react-icons";
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
        top: 30%;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        position: absolute;
    }

    &:hover .overlay {
        opacity: 1
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
        // add list of icons 
        // icons=[]
        // for (element in this.props.icons)  {
        //     icons.push(<button><{element}/></button>)
        // }
        return (
            // <CardWrapper>
            //     <h1>{this.props.title}</h1>
            //     <p>{this.props.description}</p>
            //     <img src={this.props.img}/ >
            //     <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
            //     <div>
            //         <FaGithub />
            //     </div>
            //     </IconContext.Provider>
            //     <button>
            //         <FaGithub />
            //         Source
            //     </button>
            // </CardWrapper>
            <CardWrapper>
                <ImgWrapper src={this.props.img} />
                <h2><a href={this.props.link}>{this.props.title}</a></h2>
                <div className="overlay">
                    <h2>{this.props.title}</h2>
                </div>
            </CardWrapper>
        );
    }
};

export default Project
