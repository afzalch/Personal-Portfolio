// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import {FaGithub, FaReact, FaHtml5, FaPython, FaJava, Fa} from "react-icons/fa";
// import {DiJavaScript} from "react-icons/"
import { IconContext } from "react-icons";
import styled from "styled-components";
import React, {Component} from "react"

const CardWrapper = styled.div`
    border: 3px solid gray;
    float: left;
    width: 45%;
    margin: 0 1rem;
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
            <CardWrapper>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <img src={this.props.img}/ >
                <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <div>
                    <FaGithub />
                </div>
                </IconContext.Provider>
                <button>
                    <FaGithub />
                    Source
                </button>
            </CardWrapper>
        );
    }
};

export default Project
