import React, { Component } from 'react'
import Slider from "react-slick"
import GridMedia from "./GridMedia"
import TitleCard from "./TitleCard"

import "../../slick/slick.css"
import "../../slick/slick-theme.css"

export default class SliderWrapper extends Component {
    constructor(props){
      super(props);

      this.state = {
        currentImage:0,
        lightBoxIsOpen: false
      }

      this.openLightbox = this.openLightbox.bind(this);
    }

  openLightbox(index) {
    this.setState({
        currentImage: index,
        lightboxIsOpen: true,
    });
  }

  render() {
    const { photos, color, title } = this.props;
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
          { photos.map((item, index) => <div className="highlightSlide" key={index} >
                <GridMedia 
                      videoName={"sliderVideo"}
                      cssName={"sliderMedia"}
                      media={item.media_type}
                      src={item.link} 
                      openLightbox={this.openLightbox}   
                      index={index} />
          </div>)}
        </Slider>
      </div>
    );
  }
  }