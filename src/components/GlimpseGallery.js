import React, { Component } from 'react'
import Lightbox from '../lightbox/Lightbox';
import Photo from "./Photo.js";
import Video from "./Video.js";
import TitleCard from "./TitleCard";
import Add from "./Add.js";

import AddButton from '../assets/AddButton';




import '../css/GlimpseGallery.css';

/*
const photos = [
    { src: 'https://s3.amazonaws.com/pi-1/user6/images/09995_user6_image_2018-08-31_14.00.07.jpg', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/pi-1/user6/images/09996_user6_image_2018-08-31_13.59.21.jpg', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/pi-1/user7/images/09986_user7_image_2018-08-31_16.38.51.jpg', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/pi-1/allUser/user1/images/1_user1_image_2018-08-03_14.33.25.jpg', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img10_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img11_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img12_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img2_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img3_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img4_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img6_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img7_lolla.png', width: 1, height: 1 },
    { src: 'https://s3.amazonaws.com/glimpse-q1-demo/img8_lolla.png', width: 1, height: 1 },
  ];
*/
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
      .catch(err => {
        console.log(err)
        console.log("caught an error, server call did not go through")
      } );
  }

  callApi = async () => {
    const response = await fetch('/media/getAllImages');
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
