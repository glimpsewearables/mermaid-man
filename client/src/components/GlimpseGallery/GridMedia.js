import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';

export default class Photo extends Component {
  constructor(props){
    super(props)

    this.onClick = this.onClick.bind(this)
  }
  
  onClick(){
    console.log(this.props.index);
    this.props.openLightbox(this.props.index)
  }

  render() {
    const { src, onClick, cssName, media, videoName } = this.props;
    if(media === "image"){
      return (
        <div className={cssName}>
          <LazyLoad height={100}>
            <img src={src} onClick={onClick} />
          </LazyLoad>
        </div>
      )
    } else {
      return(
        <div className={cssName}>
          <video className={videoName} id="iframe" width="100%" onClick={onClick} controls>
            <source src={src} type="video/mp4" />
            Your browser does not currenttly support our video platform.
          </video>
        </div>
      )
    }
    
  }
}

