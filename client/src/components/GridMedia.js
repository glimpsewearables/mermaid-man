import React, { Component } from 'react'

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
    const { src, onClick, cssName, media } = this.props;
    if(media === "image"){
      return (
        <div className={cssName}>
          <img src={src} onClick={this.onClick} />
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
    
  }
}
