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
    this.createPhotos = this.createPhotos.bind(this);
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

  createPhotos(){
    let { photos } = this.props;
    let gridContent = photos.map((item, index) => <GridMedia key={index}
                                                                videoName={"gridVideo"}
                                                                cssName={"gridMedia"}
                                                                src={item.link} 
                                                                media={item.media_type}
                                                                onClick={this.openLightbox}
                                                                index={index} />);
    let key = 0;
    while(gridContent.length < 3 ){
      key += 1;
      let filler = <div className="fillerDiv gridMedia" key={key}><div className="fillerColor"></div></div>;
      gridContent.push(filler);
    }

    return gridContent;
  }

  render() {
    const { title, date, color, photos, srcImgs} = this.props;
    const { currentImage, lightboxIsOpen} = this.state;

    let gridContent = this.createPhotos()
    return (
      <div className="grid-container container">
       { gridContent !== []
       ? <div> <div className="photos">
            <TitleCard 
              color={color}
              title={title}/>

            { gridContent }
          </div>
          <Lightbox 
            images={srcImgs}
            onClick={this.openLightbox}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={currentImage}
            isOpen={lightboxIsOpen} /> </div>
       : <div className="glimpseGalleryError"> Connect device to singal to view content </div>}
       
      </div>
    )
  }
}

export default GlimpseGallery;