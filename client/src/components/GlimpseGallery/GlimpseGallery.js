import React, { Component } from 'react'

import Lightbox from '../lightbox/Lightbox'
import GridMedia from "./GridMedia.js"
import TitleCard from "./TitleCard"

import './GlimpseGallery.css'

class GlimpseGallery extends Component {
  constructor(props){
    super(props);

    this.state = { 
        currentImage:0,
        userImgs:{},
        userVideos:{},
        photos:[],
        lightboxIsOpen: false,
    };

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
    const { title, date, color, photos, srcImgs, srcGifs} = this.props;
    const { currentImage, lightboxIsOpen} = this.state;
    const photoSlides = photos.map((item, index) => 
      <GridMedia key={index}
        videoName={"gridVideo"}
        cssName={"gridMedia"}
        gifSrc={item.gif_link}
        videoSrc={item.link}
        onClick={this.openLightbox}
        index={index} 
      />
    );

    return (
      <div className="grid-container container">
        <div className="photos">
          <TitleCard 
            color={color}
            title={title} />
          { photoSlides }
        </div>
        <Lightbox 
          images={srcImgs}
          gifs={srcGifs}
          onClick={this.openLightbox}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={lightboxIsOpen} />
      </div>
    )
  }
}

export default GlimpseGallery;