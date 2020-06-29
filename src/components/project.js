import { Link } from "gatsby"
import PropTypes from "prop-types"
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
        return (
            <CardWrapper>
                <h1>{this.props.title}</h1>
            </CardWrapper>
        );
    }
};

export default Project
