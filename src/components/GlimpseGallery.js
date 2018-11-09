import React, { Component } from 'react'
import Lightbox from '../lightbox/Lightbox';
import Photo from "./Photo.js";
import TitleCard from "./TitleCard";
import Add from "./Add.js";

import AddButton from '../assets/AddButton';




import '../css/GlimpseGallery.css';

const photos = [];

export default class GlimpseGallery extends Component {
  constructor(props){
    super(props);

    this.state = { 
        currentImage:0,
        userImgs:{},
        userVideos:{} 
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(index) {
    console.log(index);
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
      .then(res => this.setState({ photos: JSON.parse(res.data).media
        .map((item, index) => <Photo 
          key={index} src={item.link} 
          openLightbox={this.openLightbox}   
          index={index} />) 
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="grid-container container">
        <div className="photos">
          <TitleCard color={this.props.color}
                       title={this.props.title}
                       date={this.props.date}   />
          {this.state.photos}
        </div>
        <Lightbox 
          onClick={this.openLightbox}
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
