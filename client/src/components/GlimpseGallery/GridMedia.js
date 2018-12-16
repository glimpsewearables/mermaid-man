import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';

export default class Photo extends Component {
  constructor(props){
    super(props)

    this.onClick = this.onClick.bind(this)
  }
  
  onClick(){
    console.log(this.props.index, this.props.currImg, this.props.open);
    this.props.onClick(this.props.index, this.props.currImg, this.props.open)
  }

  render() {
    const { src,  cssName, media, videoName, index } = this.props;
    if(media === "image"){
      return (
        <div className={cssName} onClick={this.onClick} key={index}>
          <LazyLoad height={100}>
            <img src={src}  />
          </LazyLoad>
        </div>
      )
    } else {
      return(
        <div className={cssName} onClick={this.onClick} key={index}>
          <video className={videoName} id="iframe" width="100%" controls >
            <source src={src} type="video/mp4" />
            Your browser does not currenttly support our video platform.
          </video>
        </div>
      )
    }
    
  }
}

