import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

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
        photos:[]
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
  
  componentWillMount() {
    this.callApi()
      .then(res => this.setState({ 
        photos: JSON.parse(res.data).objects 
      }))
      .catch(err => {
        console.log("error mapping results from express: " + err)
      } );
  }

  callApi = async () => {
    const response = await fetch('/media/getAllImages');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const { photos, title, date, color} = this.props;
    const { currentImage, lightboxIsOpen, objects } = this.state;
    const imgSrc = photos.map(el => ({ src:el.link, media: el.media_type}) );
    console.log(photos);
    const photoSlides = photos.map((item, index) => <GridMedia key={index} 
                                                                cssName="gridMedia"
                                                                src={item.link} 
                                                                media={item.media_type}
                                                                openLightbox={this.openLightbox}   
                                                                index={index} />);

    return (
      <div className="grid-container container">
        <div className="photos">
          <TitleCard color={color}
                       title={title}
                       date={date}   />
          {photoSlides}
        </div>
        <Lightbox 
          onClick={ this.openLightbox }
          images={ imgSrc }
          onClose={ this.closeLightbox }
          onClickPrev={ this.gotoPrevious }
          onClickNext={ this.gotoNext }
          currentImage={ currentImage }
          isOpen={ lightboxIsOpen }
        />
        
      </div>
    )
  }
}

export default GlimpseGallery;