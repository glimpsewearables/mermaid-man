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
    const { gifSrc, videoSrc, cssName, videoName, index } = this.props;
    if(gifSrc === "") {
      return(
        <div className={cssName} onClick={this.onClick}>
          <video className={videoName} id="iframe" width="100%" controls >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not currenttly support our video platform.
          </video>
        </div>
      )    
    } else {
      return (
        <div className={cssName} onClick={this.onClick}>
          <img src={gifSrc}  />
        </div>
      )
    }
    // <LazyLoad height={100}> 
    //</LazyLoad>
    //} else {
    //   
    // }
    
  }
}

