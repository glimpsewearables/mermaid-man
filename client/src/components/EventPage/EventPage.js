import React, { Component } from 'react'

import GlimpseGallery from "../GlimpseGallery/GlimpseGallery"

import SliderWrapper1 from "../GlimpseGallery/SliderWrapper1"
import SliderWrapper2 from "../GlimpseGallery/SliderWrapper2"
import "./EventPage.css"
import { connect } from 'react-redux'

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
        <div>
            <div className="contentWrapper">
              <div className="eventTitle">
                <h1>Louis the Child</h1>
                <div className="eventTitleDetails">
                  <h3>12/1/18 </h3>
                  <span className="dot"></span>

                  <h3> Seattle, WA</h3>
                </div>
                
              </div>
              <SliderWrapper1 photos={images}/>
              <GlimpseGallery color="#222536" title={"CLiP Photos"} date={"10/12/18"} 
                        photos={images} srcImgs={imgSrc}/>
            </div>
          </div>
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
