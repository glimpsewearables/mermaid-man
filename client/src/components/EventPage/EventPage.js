import React, { Component } from 'react'

import GlimpseGallery from "../GlimpseGallery/GlimpseGallery"

import SliderWrapper1 from "../GlimpseGallery/SliderWrapper1"
import SliderWrapper2 from "../GlimpseGallery/SliderWrapper2"
import "./EventPage.css"
import { connect } from 'react-redux'

import Banner from "./Banner"



class EventPage extends Component {
  constructor(){
      super();

      this.state = {
        open: true,
      }
  }

  render() {
    const images = this.props.objects;
    const imgSrc = images.map(el => ({ "src":el.link}) );
    return (
      <div>
        <Banner 
          title={"Louis the Child"}
          date={"12/01/2018"}
          dot={true}
          location={"Seattle, WA ~ Wamu Theater"}/>

        <SliderWrapper1 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          photos={images}/>

        <GlimpseGallery 
          color="#F8B800" 
          title={"CLiP Photos".split(" ")}
          date={"10/12/18"} 
          photos={images} 
          srcImgs={imgSrc}/>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        objects: state.objects,
    }
}

export default connect(mapStateToProps)(EventPage);
