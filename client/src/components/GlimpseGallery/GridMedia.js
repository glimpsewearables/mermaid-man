import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';

const GridMedia = (props) => {
  const { src, cssName, media } = props;
  if(media === "image"){
    return (
      <div className={cssName}>
        <LazyLoad height={100}>
          <img src={src} onClick={this.onClick} />
        </LazyLoad>
      </div>
    )
  } else {
    return(
      <div className={cssName}>
        <div className="gridVideo">
          <video id="iframe" width="100%" controls  >
            <source src={src} type="video/mp4" />
            Your browser does not currenttly support our video platform.
          </video>
        </div>
      </div>
    )
  }
};

export default GridMedia;

