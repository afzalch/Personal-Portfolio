import React, {Component} from "react"
import styled from "styled-components";


const SlideShow = styled.div`
    width: 100%;
    height: 100%;
`;


const ImageSlide = (props) => {
    const styles = {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    };

    return (
        <div>
            <img src={props.image} className="image-slide" style={styles}/>
            <figcaption>{props.desc}</figcaption>
        </div>
    );
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );

class Carousel extends Component{
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.props.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
        this.setState({
          currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = this.props.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    
        this.setState({
          currentImageIndex: index
        });
    }
    
    render(){
        return (
            <SlideShow>
                <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />
                <div className="gallery-image">
                <ImageSlide image={this.props.images[this.state.currentImageIndex]} desc={this.props.description[this.state.currentImageIndex]}/>
                </div>
                <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            </SlideShow>
        )
    }
}

export default Carousel