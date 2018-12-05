import React, { Component } from 'react'
import Slider from "react-slick"
import GridMedia from "./GridMedia"
import TitleCard from "./TitleCard"

import "../../slick/slick.css"
import "../../slick/slick-theme.css"
import Lightbox from "../lightbox/Lightbox"


export default class SliderWrapper extends Component {
    constructor(props){
      super(props);

      this.state = {
        currentImage:0,
        lightBoxIsOpen: false
      }

      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    openLightbox(index) {
      this.setState({
        currentImage: index,
        lightboxIsOpen: true,
      });
    }
  
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }
  
    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
  
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }

  render() {
    const { photos, color, title, srcImgs } = this.props;
    const { currentImage, lightboxIsOpen } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="grid-container">
        <Slider {...settings}>
          {/* <div className="highlightSlide" >
            <TitleCard 
              cssName={"sliderMedia"}
              color={color}
              title={title}/>
         </div> */}
          { photos.map((item, index) => 
                                      <div className="highlightSlide" key={index} >
                                            <GridMedia 
                                                  videoName={"sliderVideo"}
                                                  cssName={"sliderMedia"}
                                                  src={item.link} 
                                                  media={item.media_type}
                                                  onClick={this.openLightbox}   
                                                  index={index} />
                                      </div>)}
        </Slider>
        <Lightbox 
          images={srcImgs}
          onClick={this.openLightbox}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={lightboxIsOpen} />
      </div>
    );
  }
  }