// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import {FaGithub} from "react-icons/fa";
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
        // for 
        return (
            <CardWrapper>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <img src={this.props.img}/ >
                <button>
                    <FaGithub />
                </button>
            </CardWrapper>
        );
    }
};

export default Project
