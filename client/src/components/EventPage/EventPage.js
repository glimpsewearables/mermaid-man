import React, { Component } from 'react'

import Sidebar from '../Sidebar'
import GlimpseGallery from "../GlimpseGallery"

import SliderWrapper1 from "../SliderWrapper1"
import SliderWrapper2 from "../SliderWrapper2"

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
                <h2>Bumpershoot</h2>
                <h3>10/18/14</h3>
              </div>
              <Sidebar 
                open={this.state.open}
                onOpenChange={this.onOpenChange}
              />
              <SliderWrapper1 photos={imgSrc.slice(0, 5)}/>
              <GlimpseGallery color="#222536" title={"Photos Taken With Glimpse"} date={"10/12/18"} 
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
