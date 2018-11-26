import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "../slick/slick.css";
import "../slick/slick-theme.css";
/*

if(item.src.split(".")[3] === "mp4"){
                            console.log("caught video");
                            console.log(index);
                            <Video src={item.src} />
                          } else{

*/

const photos = [
  { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img6_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img7_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img8_lolla.png', width: 1, height: 1 },
  
];


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
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <div className="grid-container carousel">
          <Carousel {...settings}>
            <video controls >
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
            <img src="https://s3.amazonaws.com/glimpse-q1-demo/img6_lolla.png" />
            <img src="https://s3.amazonaws.com/glimpse-q1-demo/img8_lolla.png" />
          </Carousel>
        </div>
      );
    }
  }