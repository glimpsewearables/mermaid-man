import React, { Component } from 'react'
import GlimpseGallery from "../GlimpseGallery/GlimpseGallery";

export default class Events extends Component{
  componentWillMount(){
    //getPhotos();
    //shove photos into arrays as necessary.
  }


  render() {
    return (
      <div>
        <div>
            Welcome to glimpse wearables
        </div>
        <div>
          <GlimpseGallery
              color={this.props.color}
              title={this.props.title}
              date={this.props.date}
          />
        </div>
      </div>
    )
  }
}
