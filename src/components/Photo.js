import React, { Component } from 'react'

export default class Photo extends Component {
  constructor(props){
    super(props)

    this.onClick = this.onClick.bind(this)
  }
  
  onClick(){
    this.props.openLightbox(this.props.index)
  }

  render() {
    const { src, onClick } = this.props;
    return (
      <img src={src} onClick={this.onClick} />
    )
  }
}
