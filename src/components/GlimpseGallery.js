import React, { Component } from 'react'
import Lightbox from '../lightbox/Lightbox';
import Photo from "./Photo.js";
import Add from "./Add.js";
import AddButton from '../assets/AddButton'



import '../css/GlimpseGallery.css';

const photos = [
    { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 1, height: 1 },
    { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 1, height: 1 }
  ];

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
    
  render() {

    return (
        <div className="grid-container container">
            <div className="photos">
                {photos.map( (item, index) => <Photo key={index} src={item.src} 
                                                     openLightbox={this.openLightbox}   
                                                     index={index} /> )}
                 <Add />  
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
