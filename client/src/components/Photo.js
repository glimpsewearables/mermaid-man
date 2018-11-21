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
    const { src, onClick, cssName } = this.props;
    return (
      <div className={cssName}>
        <img src={src} onClick={this.onClick} />
      </div>
    )
  }
}
